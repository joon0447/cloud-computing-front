import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const OpenAI = () => {
    return (
        <Container fluid className="py-5 bg-light">
            <Row className="align-items-center">
                {/* 왼쪽: 이미지 또는 로고 */}
                <Col md={6} className="text-center">
                    <img
                        src="images/openai.jpg"
                        alt="OpenAI Logo"
                        style={{ maxWidth: "60%", height: "auto" }}
                    />
                </Col>

                {/* 오른쪽: 소개글 */}
                <Col md={6}>
                    <h2 className="mb-4">About OpenAI</h2>
                    <p>
                        <strong>OpenAI</strong>는 인공지능 기술을 통해 인류 전체에게 이익이 되는 방향으로 발전시키는 것을 목표로 하는 선도적인 연구 개발 기업입니다.  
                        자연어 처리 분야의 혁신적인 모델인 <strong>GPT 시리즈</strong>를 비롯해, 이미지 생성 도구 <strong>DALL·E</strong>, 코드 생성 AI <strong>Codex</strong> 등 다양한 기술을 보유하고 있습니다.
                    </p>
                    <p>
                        OpenAI는 개방성과 안전성을 중심에 두며, 개발자들이 쉽게 AI를 활용할 수 있도록 API와 문서 등을 제공하고 있습니다.  
                        AI가 모두에게 도움이 되는 방향으로 활용될 수 있도록 지속적으로 노력하고 있습니다.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default OpenAI;