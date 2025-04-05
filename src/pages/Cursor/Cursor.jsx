import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const CursorAI = () => {
    return (
        <Container fluid className="py-5 bg-white">
            <Row className="align-items-center">
                {/* 왼쪽: Cursor 로고 이미지 */}
                <Col md={6} className="text-center">
                    <img
                        src="images/cursor.jpg"
                        alt="Cursor AI Logo"
                        style={{ maxWidth: "50%", height: "auto" }}
                    />
                </Col>

                {/* 오른쪽: 소개글 */}
                <Col md={6}>
                    <h2 className="mb-4">About Cursor AI</h2>
                    <p>
                        <strong>Cursor AI</strong>는 AI와 통합된 차세대 코드 편집기입니다. Visual Studio Code를 기반으로 하여, 친숙한 개발 환경에 **AI 기능을 자연스럽게 통합**한 것이 특징입니다.
                    </p>
                    <p>
                        자연어로 명령을 내려 함수나 클래스 전체를 생성하거나, 리팩토링 요청을 통해 수많은 줄의 코드를 한 번에 수정할 수 있으며, 코드베이스 전체를 대상으로 자연어 질의도 가능합니다.
                    </p>
                    <p>
                        Shopify, OpenAI, Instacart 같은 다양한 기업의 개발자들이 Cursor를 활용하여 코드 생산성과 협업 효율을 극대화하고 있습니다.
                        개발자의 워크플로우에 AI를 접목시키는 가장 실용적인 도구 중 하나입니다.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default CursorAI;
