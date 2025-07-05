export interface ChatItem {
    id: string;
    profile: string;
    title: string;
    name: string;
    message: string;
    minutesAgo: number;
    unreadCount: number;
}
  
export const chatItems: ChatItem[] = [
    {
        id: "1234",
        profile: "https://randomuser.me/api/portraits/women/68.jpg",
        title: "안녕하세요, 문의드립니다",
        name: "홍길동",
        message: "어제 문의하신 내용에 대해 답변드립니다.",
        minutesAgo: 5,
        unreadCount: 2,
    },
    {
        id: "5678",
      profile: "https://randomuser.me/api/portraits/men/32.jpg",
      title: "회의 일정 확인 요청어쩌구...",
      name: "김철수",
      message: "내일 오전 회의 일정 확인 부탁드립니다...",
      minutesAgo: 12,
      unreadCount: 0,
    },
    {
        id: "4564",
      profile: "https://randomuser.me/api/portraits/men/10.jpg",
      title: "병원 이동 도와주실 분 찾습니다!",
      name: "노시환",
      message: "어쩌구저쩌구...",
      minutesAgo: 87,
      unreadCount: 4,
    },
  ];
  