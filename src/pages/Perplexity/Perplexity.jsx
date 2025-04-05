import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Perplexity = () => {
    return (
        <Container fluid className="py-5 bg-white">
            <Row className="align-items-center">
                {/* 왼쪽: 로고나 대표 이미지 */}
                <Col md={6} className="text-center">
                    <img
                        src="images/perplexity.jpg"
                        alt="Perplexity Logo"
                        style={{ maxWidth: "60%", height: "auto" }}
                    />
                </Col>

                {/* 오른쪽: 소개글 */}
                <Col md={6}>
                    <h2 className="mb-4">About Perplexity AI</h2>
                    <p>
                        <strong>Perplexity AI</strong>는 인공지능 기반의 차세대 질문응답 및 검색 플랫폼으로, 사용자의 질문에 대해 신속하고 정확한 답변을 제공하는 데 초점을 맞추고 있습니다.
                    </p>
                    <p>
                        전통적인 검색 엔진과 달리, Perplexity는 자연어 처리 기술을 활용해 문맥에 맞는 정보를 요약하고, 관련 출처까지 함께 제공하여 신뢰성을 높입니다.  
                        특히 학습, 리서치, 코드 작성 등 다양한 분야에서 직관적인 지식 탐색 도구로 주목받고 있습니다.
                    </p>
                    <p>
                        사용자는 대화형 방식으로 질문을 입력하고, AI는 최신 웹 데이터 기반의 응답을 실시간 생성하며, 더 나은 정보 소비 경험을 제공합니다.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Perplexity;
