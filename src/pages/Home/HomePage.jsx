import { Container, Row, Col, Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom";


const HomePage = () => {
    const navigate = useNavigate();
    return (
        <Container fluid>
            <Row className="my-3">
                <Col md={3}>
                    <Card onClick={() => {navigate('/openai')}} role="button">
                        <Card.Img 
                        src={"images/openai.jpg"} 
                        className="w-100 h-100 object-fit-cover p-3 rounded-5"
                        />
                        <Card.Body>
                            <p>
                                OpenAI는 인공지능(AI)의 발전과 활용을 통해 인류 전체에 이익이 되도록 하는 것을 목표로 하는 연구 및 개발 기업입니다.
                                2015년에 설립된 OpenAI는 안전하고 윤리적인 방식으로 인공지능 기술을 개발하며, AI가 모두에게 긍정적인 영향을 줄 수 있도록 다양한 연구와 서비스를 제공합니다.
                                대표적인 성과로는 자연어 처리(NLP) 분야에서 혁신을 이룬 GPT 시리즈, 그리고 이미지 생성 모델 DALL·E, 코드 자동화 도구 Codex 등이 있으며, 이는 사람들의 창의력과 생산성을 극대화하는 데 기여하고 있습니다.
                                OpenAI는 개방성과 협력을 중요하게 생각하며, 개발자와 기업들이 인공지능을 쉽게 활용할 수 있도록 API 형태의 서비스도 제공하고 있습니다.
                                궁극적으로, OpenAI는 인공지능이 모두에게 공평하고 안전하게 혜택을 줄 수 있도록 기술적, 윤리적 기준을 세우고 실천하고 있습니다.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} onClick={() => {navigate('/perplexity')}} role="button">
                    <Card>
                        <Card.Img 
                        src={"images/perplexity.jpg"} 
                        className="w-100 h-100 object-fit-cover p-3 rounded-5"
                        />
                        <p>
                        Perplexity AI는 최신 인공지능 기술을 활용해 사용자의 질문에 정확하고 신속하게 답변해주는 차세대 검색 및 질문응답 플랫폼입니다.
                        전통적인 검색 엔진과 달리, Perplexity는 자연어 처리(NLP) 기반의 AI를 통해 간결하면서도 문맥에 맞는 정보를 제공하며, 출처 링크도 함께 제공해 신뢰성을 높였습니다.
                        Perplexity AI의 가장 큰 특징은 대화형 인터페이스를 통해 사용자와의 상호작용을 강화하고, 단순한 검색이 아니라 지식 탐색 경험을 제공한다는 점입니다.
                        GPT 기반의 언어 모델을 바탕으로 웹상의 다양한 출처를 실시간으로 분석하여 응답을 생성하며, 공부, 리서치, 코딩, 트렌드 조사 등 다양한 분야에서 유용하게 활용되고 있습니다.
                        빠르고 직관적인 UX와 강력한 AI 기반 검색 기술을 결합한 Perplexity는 **“AI 기반의 새로운 검색 방식”**을 제시하며 전 세계 사용자들의 주목을 받고 있습니다.
                        </p>
                    </Card>
                </Col>
                <Col md={3} onClick={() => {navigate('/gemini')}} role="button">
                    <Card>
                        <Card.Img 
                        src={"images/gemini.png"} 
                        className="w-100 h-100 object-fit-cover p-3 rounded-5"
                        />
                        <p>
                        Gemini는 Google DeepMind에서 개발한 차세대 인공지능 모델로, 텍스트, 이미지, 코드, 음성 등 다양한 형태의 정보를 통합적으로 이해하고 생성할 수 있는 멀티모달 AI입니다.
                        Gemini는 Google의 방대한 기술력과 인프라를 바탕으로 개발되었으며, 고성능 자연어 처리와 고차원적 추론 능력을 갖춘 강력한 인공지능 시스템으로 주목받고 있습니다.
                        Gemini의 주요 특징은 다음과 같습니다:
                        ✅ 멀티모달 처리: 텍스트뿐 아니라 이미지, 오디오 등 다양한 형태의 입력을 동시에 이해하고 응답
                        ✅ 고급 추론 능력: 복잡한 질문이나 작업도 이해하고 단계적으로 해결 가능
                        ✅ 코드 이해 및 생성: 개발자를 위한 코드 분석, 생성, 디버깅 지원 기능 강화
                        ✅ 지속적인 학습 및 진화: 최신 정보와 문맥을 반영한 동적 업데이트 가능
                        Gemini는 Google의 검색, Workspace, Bard 등 다양한 서비스에 통합되고 있으며, 향후 인공지능의 일상적인 활용 범위를 더욱 넓혀줄 것으로 기대되고 있습니다.
                        </p>
                    </Card>    
                </Col>
                <Col md={3} onClick={() => {navigate('/cursor')}} role="button">
                    <Card>
                        <Card.Img 
                        src={"images/cursor.jpg"} 
                        className="w-100 h-100 object-fit-cover p-3 rounded-5"
                        />
                        <p>
                        ​Cursor는 AI 기반의 통합 개발 환경(IDE)으로, 개발자들의 생산성을 향상시키기 위해 설계되었습니다. Visual Studio Code를 기반으로 하며, 코드 생성, 스마트 리팩토링, 코드베이스 질의 등 다양한 AI 기능을 통합하고 있습니다.
                        </p>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default HomePage