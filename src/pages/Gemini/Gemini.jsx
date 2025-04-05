import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Gemini = () => {
    return (
        <Container fluid className="py-5 bg-light">
            <Row className="align-items-center">
                {/* 왼쪽: Gemini 로고 이미지 */}
                <Col md={6} className="text-center">
                    <img
                        src="images/gemini.png"
                        alt="Google Gemini Logo"
                        style={{ maxWidth: "60%", height: "auto" }}
                    />
                </Col>

                {/* 오른쪽: 소개글 */}
                <Col md={6}>
                    <h2 className="mb-4">About Google Gemini</h2>
                    <p>
                        <strong>Google Gemini</strong>는 Google DeepMind가 개발한 차세대 인공지능 모델로, 텍스트, 이미지, 코드, 음성 등 다양한 형태의 데이터를 동시에 이해하고 처리할 수 있는 **멀티모달 AI**입니다.
                    </p>
                    <p>
                        Gemini는 복잡한 질문에 대한 고급 추론 능력을 갖추고 있으며, Google 검색, Bard, Workspace 등 다양한 제품군에 통합되어 있습니다.
                        AI의 지능적 활용을 통해 창작, 분석, 자동화 등 다양한 영역에서 사용자 경험을 혁신하고 있습니다.
                    </p>
                    <p>
                        Google의 기술력과 방대한 데이터 인프라를 기반으로 한 Gemini는, AI가 일상과 업무에 자연스럽게 스며드는 미래를 실현하고자 합니다.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Gemini;
