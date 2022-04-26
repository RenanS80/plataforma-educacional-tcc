INSERT INTO tb_user (first_name, last_name, email, password) VALUES ('Renan', 'Soares', 'renan@email.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (first_name, last_name, email, password) VALUES ('Lucas', 'Lopes', 'lucas@email.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (first_name, last_name, email, password) VALUES ('Maria', 'Andrade', 'maria@email.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');
INSERT INTO tb_role (authority) VALUES ('ROLE_STUDENT');
INSERT INTO tb_role (authority) VALUES ('ROLE_INSTRUCTOR');

INSERT INTO tb_resource (title, description, link, registration_date) VALUES ('Caelum Estruturação de Páginas Usando HTML e CSS', 'Apostila que visa ensinar de uma maneira elegante, mostrando apenas o que é necessário e quando é necessário, no momento certo, poupando o leitor de assuntos que não costumam ser de seu interesse em determinadas fases do aprendizado', 'https://www.caelum.com.br/apostila/apostila-html-css-javascript.pdf', TIMESTAMP WITH TIME ZONE '2022-01-01 01:09:28-04:42:46');
INSERT INTO tb_resource (title, description, link, registration_date) VALUES ('Playlist de aulas HTML5 e CSS3', 'A playlist de HTML5 e CSS3 vai ensinar a criar sites usando a linguagem de marcação hipertexto (HTML) e  folhas de estilo em cascata (CSS), todas em suas versões mais recentes. Neste curso, o Professor Gustavo Guanabara criou um conjunto de vídeos, exercícios e desafios como forma de fixar os conhecimento aprendido', 'https://www.youtube.com/watch?v=Ejkb_YpuHWs&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n', TIMESTAMP WITH TIME ZONE '2021-10-05 01:09:28-04:42:46');
INSERT INTO tb_resource (title, description, link, registration_date) VALUES ('Ebook Python Eficiente', 'Com o eBook Python Eficiente você será capaz de programar em Python com mais qualidade e também mais agilidade – e o melhor ele é gratuito', 'https://www.horadecodar.com.br/ebook-python-eficiente-gratuito/', TIMESTAMP WITH TIME ZONE '2021-01-11 01:09:28-04:42:46');
INSERT INTO tb_resource (title, description, link, registration_date) VALUES ('Documentação SAP', 'Para ajudar a melhorar e otimizar a performance do SAP Fiori Client, você pode agora efetuar o opt-in para a coleta de dados de estatísticas do aplicativo SAP Fiori Client. Informações como que dispositivo você está utilizando, o modelo do dispositivo, o sistema operacional do dispositivo em execução e durante quanto tempo utiliza o SAP Fiori Client cada vez que efetua o logon são coletadas e disponibilizadas ao seu administrador do sistema. Você pode optar por efetuar o opt-out em qualquer momento', 'https://help.sap.com/doc/d55f83e12e4b40779158fbaf08fe0f14/1.8/pt-BR/index.html', TIMESTAMP WITH TIME ZONE '2020-05-05 01:09:28-04:42:46');

INSERT INTO tb_collection (title, description, link, platform, image, score, count) VALUES ('Desenvolvimento Web Completo 2022 - 20 cursos + 20 projetos', 'Domine Web - 20 Cursos - HTML5, CSS3, SASS, Bootstrap, JS, ES6, PHP 7, OO, MySQL, JQuery, MVC, APIs, IONIC e muito mais', 'https://www.udemy.com/course/web-completo/', 'Udemy', 'https://ik.imagekit.io/zqxyh6u3ylz/TCC/Cursos/Desenvolvimento_Web_OVglFCGQN.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651008193011', 0.0, 0);
INSERT INTO tb_course (id, registration_date) VALUES (1, TIMESTAMP WITH TIME ZONE '2022-02-18 01:09:28-04:42:46');

INSERT INTO tb_collection (title, description, link, platform, image, score, count) VALUES ('Empreendedorismo', 'Aprenda todos os princípios básicos para começar a empreender e quais as habilidades você precisa desenvolver', 'https://www.udemy.com/course/curso-de-empreendedorismo/', 'Udemy', 'https://ik.imagekit.io/zqxyh6u3ylz/TCC/Cursos/Empreendedorismo_frSS_Fpwk.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651008304572', 0.0, 0);
INSERT INTO tb_course (id, registration_date) VALUES (2, TIMESTAMP WITH TIME ZONE '2020-08-15 01:09:28-04:42:46');

INSERT INTO tb_collection (title, description, link, platform, image, score, count) VALUES ('Marketing Digital Completo', 'Aprenda a vender mais criando campanhas arrasadoras no Google Ads, Facebook e Instagram e muito mais', 'https://www.udemy.com/course/marketing-digital-completo/', 'Udemy', 'https://ik.imagekit.io/zqxyh6u3ylz/TCC/Cursos/Marketing_Digital_kJ38kcrfc.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651008378975', 0.0, 0);
INSERT INTO tb_course (id, registration_date) VALUES (3, TIMESTAMP WITH TIME ZONE '2021-08-09 01:09:28-04:42:46');

INSERT INTO tb_collection (title, description, link, platform, image, score, count) VALUES ('Formação Figma', 'Aprenda a desenvolver interfaces para sites e aplicativos no Figma com soluções inteligentes e bom design gráfico', 'https://www.alura.com.br/formacao-figma', 'Alura', 'https://ik.imagekit.io/zqxyh6u3ylz/TCC/Cursos/Figma_lXNLHK9gq.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651008455770', 0.0, 0);
INSERT INTO tb_course (id, registration_date) VALUES (4, TIMESTAMP WITH TIME ZONE '2021-04-12 01:09:28-04:42:46');

INSERT INTO tb_collection (title, description, link, platform, image, score, count) VALUES ('Adobe Lightroom: lidando com aplicações profissionais', 'Curso com foco no domínio total do Adobe Lightroom, com ênfase em fotografia e criatividade de forma altamente produtiva', 'https://www.alura.com.br/curso-online-adobe-lightroom-aplicacoes-profissionais', 'Alura', 'https://ik.imagekit.io/zqxyh6u3ylz/TCC/Cursos/Adobe_Lightroom_KyyAmhvrf.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651008521817', 0.0, 0);
INSERT INTO tb_course (id, registration_date) VALUES (5, TIMESTAMP WITH TIME ZONE '2020-12-12 01:09:28-04:42:46');

INSERT INTO tb_collection (title, description, link, platform, image, score, count) VALUES ('Programação em Python do básico ao avançado', 'Aprenda Python 3.8.5 com Expressões Lambdas, Iteradores, Geradores, Orientação a Objetos e muito mais', 'https://www.udemy.com/course/curso-de-programacao-em-python-do-basico-ao-avancado/', 'Udemy', 'https://ik.imagekit.io/zqxyh6u3ylz/TCC/Cursos/Python_hZhgJ4YTo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651008567793', 0.0, 0);
INSERT INTO tb_course (id, registration_date) VALUES (6, TIMESTAMP WITH TIME ZONE '2022-01-01 01:09:28-04:42:46');

INSERT INTO tb_collection (title, description, link, platform, image, score, count) VALUES ('Automação de testes de API com Postman + Projeto de testes', 'Aprenda a criar requisições, gerenciar ambientes e coleções com Postman. Criação e execução de suítes de testes', 'https://www.udemy.com/course/automacao-de-testes-de-api-com-postman-projeto-de-testes/', 'Udemy', 'https://ik.imagekit.io/zqxyh6u3ylz/TCC/Cursos/Automa%C3%A7%C3%A3o_JeNrSOBKn.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651009154545', 0.0, 0);
INSERT INTO tb_course (id, registration_date) VALUES (7, TIMESTAMP WITH TIME ZONE '2021-11-20 01:09:28-04:42:46');

INSERT INTO tb_collection (title, description, link, platform, image, score, count) VALUES ('O Guia para Desenvolvimento de Jogos com Unity', 'Criado em parceria com a Unity Technologies: aprenda C# desenvolvendo jogos 2D e 3D com este guia abrangente', 'https://www.udemy.com/course/o-guia-definitivo-para-desenvolvimento-de-jogos-com-unity/', 'Udemy', 'https://ik.imagekit.io/zqxyh6u3ylz/TCC/Cursos/Jogos_Unity_EMOtQLOwt.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651009229834', 0.0, 0);
INSERT INTO tb_course (id, registration_date) VALUES (8, TIMESTAMP WITH TIME ZONE '2022-06-28 01:09:28-04:42:46');

INSERT INTO tb_collection (title, description, link, platform, image, score, count) VALUES ('SAP com Excel e VBA: Automatize suas Atividades no SAP', 'Curso Automação do SAP com Excel e Visual Basic: Confira Este Incrível Curso Online de SAP com Excel e VBA: Automatize suas Atividades no SAP, Ministrado por Ivair Cláudio Ferrari na CuboUP', 'https://cuboup.com/br/courses/sap-com-excel-e-vba-automatize-suas-atividades-no-sap/', 'Cubo Up', 'https://ik.imagekit.io/zqxyh6u3ylz/TCC/Cursos/SAP_cQkLnP9ti.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651009280807', 0.0, 0);
INSERT INTO tb_course (id, registration_date) VALUES (9, TIMESTAMP WITH TIME ZONE '2020-10-10 01:09:28-04:42:46');

INSERT INTO tb_collection (title, description, link, platform, image, score, count) VALUES ('IBM Think 2022', 'Think 2022 é uma conferência da IBM dedicada a tecnologia, soluções e software, como IA, nuvem, dados e segurança O evento reúne clientes de TI, engenheiros, arquitetos, desenvolvedores, parceiros e especialistas do setor interessados ​​em tecnologia e software da IBM', 'https://www.ibm.com/events/think/', 'IBM', 'https://ik.imagekit.io/zqxyh6u3ylz/TCC/Eventos/IBM_GR1Q5mGq0.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651007560030', 0.0, 0);
INSERT INTO tb_event (id, start_date, end_date) VALUES (10, TIMESTAMP WITH TIME ZONE '2022-05-09 00:00:00-00:00:00', TIMESTAMP WITH TIME ZONE '2022-05-13 00:00:00-00:00:00');

INSERT INTO tb_collection (title, description, link, platform, image, score, count) VALUES ('Semana Spring React', 'Evento online com o objetivo de compartilhar o conhecimento necessário para que os alunos conheçam o caminho para se tornarem desenvolvedores profissionais, aptos ao mercado de trabalho', 'https://devsuperior.com.br/evento-sds', 'DevSuperior', 'https://ik.imagekit.io/zqxyh6u3ylz/TCC/Cursos/Devsuperior_7_V8rF6hX.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651009409894', 0.0, 0);
INSERT INTO tb_event (id, start_date, end_date) VALUES (11, TIMESTAMP WITH TIME ZONE '2022-05-09 00:00:00-00:00:00', TIMESTAMP WITH TIME ZONE '2022-05-15 00:00:00-00:00:00');

INSERT INTO tb_tag (name) VALUES ('Back-end');
INSERT INTO tb_tag (name) VALUES ('Front-end');
INSERT INTO tb_tag (name) VALUES ('Full Stack');
INSERT INTO tb_tag (name) VALUES ('Data Science');

INSERT INTO tb_tag (name) VALUES ('HTML');
INSERT INTO tb_tag (name) VALUES ('CSS');
INSERT INTO tb_tag (name) VALUES ('SASS');
INSERT INTO tb_tag (name) VALUES ('LESS');
INSERT INTO tb_tag (name) VALUES ('Post CSS');
INSERT INTO tb_tag (name) VALUES ('Bootstrap');
INSERT INTO tb_tag (name) VALUES ('Tailwind');
INSERT INTO tb_tag (name) VALUES ('Materialize CSS');

INSERT INTO tb_tag (name) VALUES ('Javascript');
INSERT INTO tb_tag (name) VALUES ('jQuery');
INSERT INTO tb_tag (name) VALUES ('Typescript');
INSERT INTO tb_tag (name) VALUES ('React');
INSERT INTO tb_tag (name) VALUES ('Vue.js');
INSERT INTO tb_tag (name) VALUES ('Angular');

INSERT INTO tb_tag (name) VALUES ('UX Design');
INSERT INTO tb_tag (name) VALUES ('UI Design');
INSERT INTO tb_tag (name) VALUES ('Figma');
INSERT INTO tb_tag (name) VALUES ('Design Thinking');

INSERT INTO tb_tag (name) VALUES ('Java');
INSERT INTO tb_tag (name) VALUES ('Spring Framework');
INSERT INTO tb_tag (name) VALUES ('Node.js');
INSERT INTO tb_tag (name) VALUES ('C++');
INSERT INTO tb_tag (name) VALUES ('C#');
INSERT INTO tb_tag (name) VALUES ('PHP');
INSERT INTO tb_tag (name) VALUES ('JUnit');
INSERT INTO tb_tag (name) VALUES ('Python');

INSERT INTO tb_tag (name) VALUES ('React Native');
INSERT INTO tb_tag (name) VALUES ('Ionic');
INSERT INTO tb_tag (name) VALUES ('Flutter');
INSERT INTO tb_tag (name) VALUES ('Android');
INSERT INTO tb_tag (name) VALUES ('IOS');

INSERT INTO tb_tag (name) VALUES ('MySQL');
INSERT INTO tb_tag (name) VALUES ('MongoDB');
INSERT INTO tb_tag (name) VALUES ('PostgreSQL');
INSERT INTO tb_tag (name) VALUES ('Cassandra');
INSERT INTO tb_tag (name) VALUES ('Oracle DB');
INSERT INTO tb_tag (name) VALUES ('SQL Server');
INSERT INTO tb_tag (name) VALUES ('NoSQL');
INSERT INTO tb_tag (name) VALUES ('.NET');

INSERT INTO tb_tag (name) VALUES ('Gestão');
INSERT INTO tb_tag (name) VALUES ('Adobe');
INSERT INTO tb_tag (name) VALUES ('Edição de Fotos');
INSERT INTO tb_tag (name) VALUES ('Unity');
INSERT INTO tb_tag (name) VALUES ('Jogos');
INSERT INTO tb_tag (name) VALUES ('SAP');
INSERT INTO tb_tag (name) VALUES ('Excel');
INSERT INTO tb_tag (name) VALUES ('Automação');
INSERT INTO tb_tag (name) VALUES ('Power BI');
INSERT INTO tb_tag (name) VALUES ('Docker');
INSERT INTO tb_tag (name) VALUES ('QA');
INSERT INTO tb_tag (name) VALUES ('Laravel');
INSERT INTO tb_tag (name) VALUES ('GoLang');
INSERT INTO tb_tag (name) VALUES ('Django');
INSERT INTO tb_tag (name) VALUES ('Azure');
INSERT INTO tb_tag (name) VALUES ('AWS');
INSERT INTO tb_tag (name) VALUES ('Kotlin');
INSERT INTO tb_tag (name) VALUES ('Ruby');
INSERT INTO tb_tag (name) VALUES ('Inteligência Artificial');
INSERT INTO tb_tag (name) VALUES ('Deep Learning');
INSERT INTO tb_tag (name) VALUES ('Machine Learning');
INSERT INTO tb_tag (name) VALUES ('Segurança');
INSERT INTO tb_tag (name) VALUES ('Postman');

INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (1, 2);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (1, 5);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (1, 6);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (1, 13);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (2, 44);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (3, 44);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (4, 19);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (4, 20);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (4, 21);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (5, 45);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (5, 46);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (6, 1);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (6, 30);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (7, 51);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (7, 66);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (8, 47);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (8, 48);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (9, 49);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (9, 50);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (10, 62);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (10, 65);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (11, 3);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (11, 5);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (11, 6);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (11, 7);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (11, 10);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (11, 15);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (11, 16);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (11, 23);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (11, 24);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (11, 38);

INSERT INTO tb_resource_tag (resource_id, tag_id) VALUES (1, 2);
INSERT INTO tb_resource_tag (resource_id, tag_id) VALUES (1, 5);
INSERT INTO tb_resource_tag (resource_id, tag_id) VALUES (1, 6);
INSERT INTO tb_resource_tag (resource_id, tag_id) VALUES (2, 2);
INSERT INTO tb_resource_tag (resource_id, tag_id) VALUES (2, 5);
INSERT INTO tb_resource_tag (resource_id, tag_id) VALUES (2, 6);
INSERT INTO tb_resource_tag (resource_id, tag_id) VALUES (3, 1);
INSERT INTO tb_resource_tag (resource_id, tag_id) VALUES (3, 30);
INSERT INTO tb_resource_tag (resource_id, tag_id) VALUES (4, 49);
INSERT INTO tb_resource_tag (resource_id, tag_id) VALUES (4, 50);

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (3, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (3, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (3, 3);

INSERT INTO tb_user_collection_progress (user_id, collection_id, score, status) VALUES (1, 1, 4.0, 0);
INSERT INTO tb_user_collection_progress (user_id, collection_id, score, status) VALUES (1, 3, 4.0, 1);
INSERT INTO tb_user_collection_progress (user_id, collection_id, score, status) VALUES (1, 9, 5.0, 0);
INSERT INTO tb_user_collection_progress (user_id, collection_id, score, status) VALUES (2, 2, 3, 0);
INSERT INTO tb_user_collection_progress (user_id, collection_id, score, status) VALUES (2, 3, 2, 1);
INSERT INTO tb_user_collection_progress (user_id, collection_id, score, status) VALUES (2, 9, 4, 1);
INSERT INTO tb_user_collection_progress (user_id, collection_id, score, status) VALUES (2, 5, 4, 0);
INSERT INTO tb_user_collection_progress (user_id, collection_id, score, status) VALUES (3, 8, 4, 0);
INSERT INTO tb_user_collection_progress (user_id, collection_id, score, status) VALUES (3, 7, 5, 1);
INSERT INTO tb_user_collection_progress (user_id, collection_id, score, status) VALUES (3, 6, 3, 0);
INSERT INTO tb_user_collection_progress (user_id, collection_id, score, status) VALUES (3, 4, 4, 0);
INSERT INTO tb_user_collection_progress (user_id, collection_id, score, status) VALUES (3, 3, 4, 1);

INSERT INTO tb_collection_resource (collection_id, resource_id) VALUES (1, 1);
INSERT INTO tb_collection_resource (collection_id, resource_id) VALUES (1, 2);
INSERT INTO tb_collection_resource (collection_id, resource_id) VALUES (6, 3);
INSERT INTO tb_collection_resource (collection_id, resource_id) VALUES (9, 4);
INSERT INTO tb_collection_resource (collection_id, resource_id) VALUES (11, 1);
INSERT INTO tb_collection_resource (collection_id, resource_id) VALUES (11, 2);