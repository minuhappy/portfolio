const userProfile = {
  skills: [
    "Photoshop",
    "Illustrator", 
    "3D Max",
    "SketchUp",
    "트렌드 분석",
    "공간 연출 기획",
    "매장 디스플레이",
    "POP 디자인"
  ]
};

export async function GET() {
  return Response.json({
    success: true,
    data: userProfile.skills,
    message: "스킬 정보를 성공적으로 가져왔습니다."
  });
} 