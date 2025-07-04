const userProfile = {
  projects: [
    {
      id: 1,
      title: "2023 S/S 매장 디스플레이",
      description: "트렌디한 컬러와 소재를 활용한 시즌 디스플레이 연출",
      year: "2023",
      category: "매장 연출",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      title: "브랜드 런칭 프로모션",
      description: "신규 브랜드 런칭을 위한 공간 기획 및 POP 디자인",
      year: "2023",
      category: "프로모션",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      title: "2022 F/W 컬렉션 전시",
      description: "가을/겨울 컬렉션을 위한 테마별 매장 연출",
      year: "2022",
      category: "전시 기획",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=400&q=80"
    }
  ]
};

export async function GET() {
  return Response.json({
    success: true,
    data: userProfile.projects,
    message: "프로젝트 정보를 성공적으로 가져왔습니다."
  });
} 