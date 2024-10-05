import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getUsers, getPosts } from '../../utils/api';
import UserProfile from '../../components/UserProfile';
import PostCard from '../../components/PostCard';
import AlbumCurationCard from '../../components/CurationCard';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const CardSection = ({ cards, cardWidth, isUserProfile = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = isUserProfile ? 5 : 4;  // 유저 프로필 카드는 5개, 다른 카드는 4개

  const nextCards = () => {
    setCurrentIndex((prevIndex) => 
      Math.min(prevIndex + 1, cards.length - visibleCards)
    );
  };

  const prevCards = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <CardContainerWrapper isUserProfile={isUserProfile}>
      <PrevButton onClick={prevCards} disabled={currentIndex === 0}>
        <ChevronLeft />
      </PrevButton>
      <CardContainer>
        <CardWrapper currentIndex={currentIndex} visibleCards={visibleCards}>
          {cards.map((card, index) => (
            <Card key={index} className={cardWidth} isUserProfile={isUserProfile}>
              {card}
            </Card>
          ))}
        </CardWrapper>
      </CardContainer>
      <NextButton 
        onClick={nextCards} 
        disabled={currentIndex >= cards.length - visibleCards}
      >
        <ChevronRight />
      </NextButton>
    </CardContainerWrapper>
  );
};

const MainPage = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [fetchedUsers, fetchedPosts] = await Promise.all([
          getUsers(),
          getPosts()
        ]);
        
        const sortedUsers = fetchedUsers.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setUsers(sortedUsers.slice(0, 10));

        const sortedPosts = fetchedPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setPosts(sortedPosts.slice(0, 10));
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
    fetchData();
  }, []);

  const artistCards = users.map((user) => (
    <UserProfile key={user._id} user={user} />
  ));

  const postCards = posts.map((post) => (
    <PostCard 
      key={post._id} 
      post={post} 
      onLikeUpdate={(postId, isLiked, newLikeCount) => {
        // Handle like update logic here
      }}
      onPostDelete={(postId) => {
        // Handle post delete logic here
      }}
    />
  ));

  return (
    <PageContainer>
      <Section>
        <SectionHeader>
          <Title>지금 가장 핫한 아티스트의 음원을 확인해보세요.</Title>
          <MoreLink>More <ChevronRight className="w-4 h-4 ml-1" /></MoreLink>
        </SectionHeader>
        <Underline />
        <CardSection 
          cards={artistCards}
          cardWidth="w-40"  // 카드 너비를 줄임
          isUserProfile={true}
        />
      </Section>

      <Section>
        <SectionHeader>
          <Title>사람들이 가장 공감하고 있는 노래는 무엇일까요?</Title>
          <MoreLink>More <ChevronRight className="w-4 h-4 ml-1" /></MoreLink>
        </SectionHeader>
        <Underline />
        <CardSection 
          cards={postCards}
          cardWidth="w-64"
        />
      </Section>

      <Section>
        <SectionHeader>
          <Title>지금 가장 주목받고 있는 노래들은 무엇일까요?</Title>
          <MoreLink>More <ChevronRight className="w-4 h-4 ml-1" /></MoreLink>
        </SectionHeader>
        <Underline />
        <AlbumCurationCard />
      </Section>
    </PageContainer>
  );
};

export default MainPage;

// Styled Components
// Styled Components
const PageContainer = styled.div`
  padding: 1.5rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
`;

const Underline = styled.div`
  width: 35%;
  height: 2px;
  background-color: black;
  margin-bottom: 2rem;
`;

const MoreLink = styled.a`
  display: flex;
  align-items: center;
  color: #6b7280;
  font-size: 0.875rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const CardContainerWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: ${props => props.isUserProfile ? '4rem' : '1rem'};
`;

const CardContainer = styled.div`
  overflow: hidden;
  width: 100%;
`;

const PrevButton = styled.button`
  position: absolute;
  left: -40px;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  border-radius: 50%;
  padding: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 10;
  &:disabled {
    opacity: 0.5;
  }
`;

const NextButton = styled(PrevButton)`
  left: auto;
  right: -40px;
`;

const CardWrapper = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
  transform: ${({ currentIndex, visibleCards }) => 
    `translateX(-${currentIndex * (100 / visibleCards)}%)`};
`;

const Card = styled.div`
  flex: 0 0 ${props => props.isUserProfile ? (100 / 5) : (100 / 4)}%;
  max-width: ${props => props.isUserProfile ? (100 / 5) : (100 / 4)}%;
  padding: 0 10px;
  box-sizing: border-box;
`;