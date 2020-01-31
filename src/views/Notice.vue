<template>
  <div>
    <ToHome />
    <div class="notice">
      <v-card raised elevation="15">
        <v-card-title><h1>🎨통합공지</h1></v-card-title>
        <v-alert type="error" color="pink" elevation="12">
          <strong>
            커뮤니티 운영 중 묘사되는 모든 배경, 인물, 사건 등은 허구입니다.
            이에 거부감을 느끼시거나, 과도한 몰입감을 느끼실 경우 커뮤니티
            참여를 재고해 주시기 바랍니다.
          </strong>
        </v-alert>
        <h2><strong>🌹 커뮤니티에 관해</strong></h2>
        <div class="paragraph">
          피에타 반 로섬 고별전은 트위터를 플랫폼으로 사용하는 자작 캐릭터
          커뮤니티로, kouri의 프리 호러 쯔꾸르 게임 이브(Ib)를 기반으로 한
          스토리를 가지고 있습니다. 원작 게임을 플레이해보셨다면 스토리 진행
          몰입에 도움이 될 수 있습니다만, 플레이해보지 않으셨어도 커뮤니티
          활동에 문제가 되지 않습니다.
          <br />
          <v-btn
            href="http://kouri.kuchinawa.com/game_01.html"
            target="_blank"
            dark
            rounded
            depressed
            elevation="12"
            ><strong>원작 다운로드</strong>
          </v-btn>
          <v-btn
            href="https://blog.naver.com/rlarhks8934/80190093952"
            target="_blank"
            dark
            rounded
            color="pink"
            depressed
            elevation="12"
            ><strong>한글판 다운로드</strong>
          </v-btn>
        </div>
        <div class="paragraph">
          글 신청서와 그림 신청서 모두를 허용하는 복합 커뮤니티입니다. 캐릭터
          외관 묘사를 위해 이미지를 사용할 때 실제 사진, 프로그램, 분위기 인장
          등의 사용을 허용합니다. 단 저작권에 대한 책임은 이미지를 사용한
          본인에게 있으며, 사용하신 사진이 저작권 침해에 해당될 경우 운영진
          측에서는 일절 책임지지 않습니다.
        </div>
        <h2><strong>🌹 참여 신청 및 활동</strong></h2>
        <div class="paragraph">
          본 커뮤니티는 2004년 이전 출생자를 대상으로 하고 있으며, 2005년 이후의
          출생자는 운영진과의 지인 여부에 관계 없이 활동을 허용하고 있지
          않습니다. 활동 멤버의 나이 속임 등이 적발될 시 해당 멤버의 하차 처리가
          이루어집니다. 활동 시에는 방송통신심의위원회의 인터넷내용등급기준에
          의거하여 15세 이용가의 수위를 지켜주시기 바랍니다. 자세한 사항은
          하단의 표를 참고해 주십시오.
        </div>
        <v-simple-table>
          <thead>
            <tr>
              <th class="text-left grade"></th>
              <th class="grade"><v-chip dark>노출</v-chip></th>
              <th class="grade"><v-chip dark>성행위</v-chip></th>
              <th class="grade"><v-chip dark>폭력</v-chip></th>
              <th class="grade"><v-chip dark>언어</v-chip></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="grade"><v-chip dark>4등급</v-chip></td>
              <td>성기노출</td>
              <td>성범죄 또는 노골적인 성행위</td>
              <td>잔인한 살해</td>
              <td>노골적이고 외설적인 비속어</td>
            </tr>
            <tr>
              <td class="grade"><v-chip dark>3등급</v-chip></td>
              <td>전신노출</td>
              <td>노골적이지 않은 성행위</td>
              <td class="pick">살해</td>
              <td>심한 비속어</td>
            </tr>
            <tr>
              <td class="grade"><v-chip dark>2등급</v-chip></td>
              <td>부분노출</td>
              <td class="pick">착의 상태의 성적 접촉</td>
              <td>상해</td>
              <td class="pick">거친 비속어</td>
            </tr>
            <tr>
              <td class="grade"><v-chip dark>1등급</v-chip></td>
              <td class="pick">노출복장</td>
              <td>격렬한 키스</td>
              <td>격투</td>
              <td>일상 비속어</td>
            </tr>
            <tr>
              <td class="grade"><v-chip dark>0등급</v-chip></td>
              <td>노출 없음</td>
              <td>성행위 없음</td>
              <td>폭력 없음</td>
              <td>비속어 없음</td>
            </tr>
          </tbody>
        </v-simple-table>
        <br />
        <v-btn
          href="http://www.safenet.ne.kr/dstandard.do"
          target="_blank"
          dark
          rounded
          depressed
          elevation="12"
          ><strong>인터넷내용등급기준 보러가기</strong>
        </v-btn>
        <div class="paragraph">
          자작 캐릭터 커뮤니티가 처음이시거나 트위터 플랫폼의 자작 캐릭터
          커뮤니티가 처음이신 분들 또한 활동하실 수 있습니다. 이 경우 궁금한
          점이 있으시다면 운영진에게 연락해주시면 친절히 답변해드리겠습니다.
        </div>
        <div class="paragraph">
          이전에 다른 캐릭터 커뮤니티에서 활용한 캐릭터의 경우도 참여 신청이
          가능합니다. 해당 캐릭터의 관계 정리는 신청자분의 자율에 맡기겠습니다.
        </div>
        <div class="paragraph">
          본 커뮤니티는 남성 캐릭터를 접수받고 있지 않습니다. 남성 캐릭터가
          아니더라도 신청서에 비윤리적이거나 집단 간의 혐오를 조장할 수 있는
          설정을 가지고 있을 경우 해당 신청서는 최우선적으로 합격 명단에서
          제외됩니다. 또한 한 사람의 중복 참여 신청을 금지하고 있습니다. 따라서
          동시에 둘 이상의 캐릭터로 활동하는 행위가 적발될 시 해당 캐릭터들의
          하차 처리가 이루어집니다.
        </div>
        <div class="paragraph">
          예상 인원은 5~15명이나 이 수치는 추후 상황에 따라 유동적으로 바뀔 수
          있습니다. 접수된 신청서가 5장 미만이면 본 커뮤니티는 무기한 동결로
          전환됩니다.
        </div>
        <h2><strong>🌹 기타 주의사항</strong></h2>
        <div class="paragraph list">
          <ul>
            <li>
              피에타 반 로섬 고별전은 공포 소재를 다루는 진지한 분위기의
              스토리를 진행하려 합니다. 따라서 지나치게 개그스러운 분위기를
              지양합니다. 과도한 밈 이미지, 이모티콘 등의 사용은 제재 대상에
              해당됩니다.
            </li>
            <li>
              캐릭터 계정 간의 1:1 대화가 필요할 경우 대화방에 총괄 계정이
              반드시 포함되어 있어야 합니다.
            </li>
            <li>
              사랑, 우정 등 캐릭터 간의 관계 신청에 관한 모든 로그를 허용하고
              있습니다. 단 장난식 로그의 경우 엔딩 후에만 허용되며, 엔딩 전에
              올리실 경우 경고가 1회 누적됩니다.
            </li>
            <li>편파 금지는 커뮤니티의 기본적인 에티켓입니다.</li>
            <li>
              운영진으로부터 답변이 다소 늦더라도 넓은 마음으로 양해해 주시기
              바랍니다.
            </li>
          </ul>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import ToHome from "@/views/ToHome";

export default {
  name: "notice",
  components: {
    ToHome
  }
};
</script>

<style scoped lang="scss">
.notice {
  display: flex;
  justify-content: center;
}

.v-card {
  width: 768px;
  margin: 1rem 0;
  padding: 2rem;
  background: url("../assets/steve-johnson-YS0YJLU_h2k-unsplash.jpg");
  background-size: 300%;
  font-family: "Noto Sans KR";
  font-weight: 500;
  h2 {
    font-family: "heiro";
  }
  .v-alert {
    margin-top: 10px;
  }
  .paragraph {
    margin: 20px 0px;
    text-indent: 0.6rem;
    &.list {
      text-indent: 0rem;
    }
  }
  .v-data-table {
    .grade {
      text-align: center;
    }
    .pick {
      background-color: pink;
    }
  }
  .v-btn {
    margin: 10px 10px 10px 0;
  }
  .v-card__title {
    font-family: "heiro";
    display: flex;
    justify-content: center;
  }
}
</style>
