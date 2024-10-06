# MUX


## 소개


단순히 음악을 듣는 있는 플랫폼이 아닌, 
다른 사용자들과 연결되어 음악을 **경험**할 수 있는 **커뮤니티**



### 멤버

<table>
  <tbody>
    <tr>
      <td align="center"><img src="" width="100px;" alt=""/><br /><sub><b> 팀원 : 김현빈</b></sub></a><br /></td>
      <td align="center"><img src="" width="100px;" alt=""/><br /><sub><b> 팀원 : 이승현 </b></sub></a><br /></td>
      <td align="center"><img src="" width="100px;" alt=""/><br /><sub><b> 팀장 : 이희주</b></sub></a><br /></td>
     <tr/>
      <td align="center"><img src="" width="100px;" alt=""/><br /><sub><b> 팀원 : 전나영 </b></sub></a><br /></td>
      <td align="center"><img src="" width="100px;" alt=""/><br /><sub><b>BE 팀원 : 정해량</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>



### 개발기간


24.09.~04.10.07




## MUX의 기능



|로그인|회원가입|
|:--:|:--:|
|- 회원 정보 이메일 ID<br/>- 숫자, 영문, 특수문자 조합 PW<br/> |- 이메일 형식 확인 <br/>- 비밀번호 확인 인증|
|<img width="350" alt="로그인" src="./imgs/login.png">|<img width="350" alt="회원가입" src="./imgs/signup.png">|


|랜딩 페이지|메인 페이지|
|:--:|:--:|
|- 애니메이션 적용<br/>- 로그인/회원가입 라우팅<br/> |- 유저 섹션<br/>|-추천 포스트 섹션<br/>- 유저 섹션<br/>- 추천 플레이리스트 섹션 |
|<img width="350" alt="랜딩 페이지" src="./imgs/Landing.png">|<img width="350" alt="메인 페이지" src="./imgs/artist-curation.png">|




|자작곡 업로드 1|자작곡 업로드 2|
|:--:|:--:|
|- 음원 파일 업로드<br/> |- 앨범 이미지 변경<br/>- 음원 제목, 소개 입력|
|<img width="350" alt="랜딩 페이지" src="./imgs/uploadsong1.png">|<img width="350" alt="자작곡 업로드" src="./imgs/uploadsong2.png">|


|추천 포스트 업로드|
|:--:|
|- YouTube API로 추천곡 불러오기<br/>- 포스트 제목, 내용 입력<br/> |
|<img width="350" alt="추천 포스트 업로드" src="./imgs/uploadrec.png">|



|자작곡 상세 페이지|추천 포스트 상세 페이지|
|:--:|:--:|
|- 음원 재생 기능<br/>- 좋아요, 댓글 기능<br/> |- 음악 재생 기능<br/>- 좋아요, 댓글 기능|
|<img width="350" alt="자작곡 상세 페이지" src="./imgs/songdetail.png">|<img width="350" alt="추천 포스트 상세 페이지" src="./imgs/recdetail.png">|



|자작곡-추천 플레이리스트 피드|추천곡 피드|
|:--:|:--:|
|- 자작곡 섹션<br/>- YouTube API 추천 플레이리스트 섹션<br/> |- 추천 포스트 섹션 <br/>- 무한 스크롤|
|<img width="350" alt="자작곡-추천 플레이리스트 피드" src="./imgs/main.png">|<img width="350" alt="추천곡 피드" src="./imgs/postfeed.png">|



|마이페이지|정보 수정|
|:--:|:--:|
|- 회원정보 수정<br/> |- 로그아웃 버튼<br/>- 업로드한 포스트/ 자작곡 목록|
|<img width="350" alt="마이페이지" src="./imgs/mypage.png">|<img width="350" alt="정보 수정" src="./imgs/modify.png">|



## 기술스택
<table>
<tr>
 <td align="center">Language</td>
 <td>
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
 </td>
</tr>
<tr>
 <td align="center">Library</td>
 <td>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=ffffff"/>&nbsp  
 <img src="https://img.shields.io/badge/ReactDom-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white"/>&nbsp  
<img src="https://img.shields.io/badge/Axios-6028e0?style=for-the-badge&logo=Axios&logoColor=ffffff"/>&nbsp 
  </td>
</tr>
<tr>
 <td align="center">Package</td>
 <td>
    <img src="https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=Npm&logoColor=white"/>&nbsp 
  </td>
</tr>
<tr>
 <td align="center">Bundler</td>
 <td>
    <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white"/>&nbsp 
  </td>
</tr>
<tr>
 <td align="center">Formatter</td>
 <td>
  <img src="https://img.shields.io/badge/Prettier-373338?style=for-the-badge&logo=Prettier&logoColor=ffffff"/>&nbsp 
 </td>
</tr>
<tr>
 <td align="center">Deploy</td>
 <td>
    <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white"/>&nbsp
 </td>
</tr>

<tr>
  <td align="center">Tools</td>
 <td>
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>&nbsp 
    <img src="https://img.shields.io/badge/Notion-5a5d69?style=for-the-badge&logo=Notion&logoColor=white"/>&nbsp
    <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white"/>&nbsp 
    <img src="https://img.shields.io/badge/Figma-d90f42?style=for-the-badge&logo=Figma&logoColor=white"/>&nbsp  
 </td>
</tr>
<tr>
 <td align="center">IDE</td>
 <td>
    <img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white"/>&nbsp
</tr>
</table>
<br>
<br>
