-- prompts 테이블 데이터
INSERT INTO prompts (profile_id, title, content, tags, is_public, text_template, created_at, updated_at) VALUES
('6d94fd34-5daf-4187-be23-db6dcb7f84ef', '마케팅 이메일 작성', '효과적인 마케팅 이메일을 작성하는 프롬프트', ARRAY['마케팅', '이메일', '비즈니스'], true, '당신은 전문 마케팅 이메일 작성자입니다. {product}에 대한 이메일을 작성해주세요.', NOW(), NOW()),
('6d94fd34-5daf-4187-be23-db6dcb7f84ef', '코드 리뷰어', '코드 품질을 검토하는 프롬프트', ARRAY['개발', '코드리뷰', '프로그래밍'], true, '당신은 시니어 개발자입니다. 다음 코드를 리뷰해주세요: {code}', NOW(), NOW()),
('6d94fd34-5daf-4187-be23-db6dcb7f84ef', '블로그 포스트 작성', 'SEO 최적화된 블로그 포스트 작성', ARRAY['블로그', '콘텐츠', 'SEO'], true, '{topic}에 대한 블로그 포스트를 작성해주세요.', NOW(), NOW()),
('6d94fd34-5daf-4187-be23-db6dcb7f84ef', '고객 서비스 응답', '고객 문의에 대한 응답 작성', ARRAY['고객서비스', '응답', '비즈니스'], false, '{inquiry}에 대한 전문적인 응답을 작성해주세요.', NOW(), NOW()),
('6d94fd34-5daf-4187-be23-db6dcb7f84ef', '제품 설명서', '제품 기능 설명서 작성', ARRAY['제품', '문서', '기술'], true, '{product}의 주요 기능을 설명하는 문서를 작성해주세요.', NOW(), NOW());

-- prompt_variables 테이블 데이터
INSERT INTO prompt_variables (prompt_id, name, label, type, description, is_required, validation) VALUES
(1, 'product', '제품명', 'text', '마케팅할 제품의 이름', true, '{"minLength": 2, "maxLength": 100}'),
(1, 'target_audience', '타겟 고객층', 'select', '마케팅 대상 고객층', true, '{"options": ["B2B", "B2C"]}'),
(2, 'code', '코드', 'text', '리뷰할 코드', true, '{"minLength": 10}'),
(2, 'language', '프로그래밍 언어', 'select', '코드의 프로그래밍 언어', true, '{"options": ["JavaScript", "Python", "Java"]}'),
(3, 'topic', '주제', 'text', '블로그 포스트 주제', true, '{"minLength": 5, "maxLength": 200}'),
(3, 'keywords', '키워드', 'multi-select', '포함할 키워드', false, '{"maxSelections": 5}'),
(4, 'inquiry', '문의 내용', 'text', '고객 문의 내용', true, '{"minLength": 10}'),
(4, 'tone', '응답 톤', 'select', '응답의 톤', true, '{"options": ["공식", "친근", "전문"]}'),
(5, 'product', '제품명', 'text', '설명할 제품명', true, '{"minLength": 2}'),
(5, 'format', '문서 형식', 'select', '문서 형식', true, '{"options": ["기술문서", "사용자매뉴얼", "마케팅자료"]}');

-- variable_options 테이블 데이터
INSERT INTO variable_options (variable_id, label, value) VALUES
(2, '기업 고객', 'B2B'),
(2, '일반 소비자', 'B2C'),
(4, '자바스크립트', 'JavaScript'),
(4, '파이썬', 'Python'),
(4, '자바', 'Java'),
(6, 'SEO', 'seo'),
(6, '콘텐츠 마케팅', 'content-marketing'),
(6, '소셜 미디어', 'social-media'),
(8, '공식적인', 'formal'),
(8, '친근한', 'friendly'),
(8, '전문적인', 'professional'),
(10, '기술 문서', 'technical'),
(10, '사용자 매뉴얼', 'user-manual'),
(10, '마케팅 자료', 'marketing');