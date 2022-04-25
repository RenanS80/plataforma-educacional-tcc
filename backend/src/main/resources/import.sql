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

INSERT INTO tb_collection (title, description, link, platform, image, score, count) VALUES ('Desenvolvimento Web Completo 2022 - 20 cursos + 20 projetos', 'Domine Web - 20 Cursos - HTML5, CSS3, SASS, Bootstrap, JS, ES6, PHP 7, OO, MySQL, JQuery, MVC, APIs, IONIC e muito mais', 'https://www.udemy.com/course/web-completo/', 'Udemy', 'https://ik.imagekit.io/zqxyh6u3ylz/Recursos_Educacionais/Desenvolvimento_Web_-ipCTGaap.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1642627084244', 4.8, 55);
INSERT INTO tb_course (id, registration_date) VALUES (1, TIMESTAMP WITH TIME ZONE '2022-02-18 01:09:28-04:42:46');

INSERT INTO tb_collection (title, description, link, platform, image, score, count) VALUES ('Empreendedorismo', 'Aprenda todos os princípios básicos para começar a empreender e quais as habilidades você precisa desenvolver', 'https://www.udemy.com/course/curso-de-empreendedorismo/', 'Udemy', 'https://ik.imagekit.io/zqxyh6u3ylz/Recursos_Educacionais/Empreendedorismo_DheSdmQeI92.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1642627210758', 4.2, 30);
INSERT INTO tb_course (id, registration_date) VALUES (2, TIMESTAMP WITH TIME ZONE '2020-08-15 01:09:28-04:42:46');

INSERT INTO tb_collection (title, description, link, platform, image, score, count) VALUES ('Marketing Digital Completo', 'Aprenda a vender mais criando campanhas arrasadoras no Google Ads, Facebook e Instagram e muito mais', 'https://www.udemy.com/course/marketing-digital-completo/', 'Udemy', 'https://ik.imagekit.io/zqxyh6u3ylz/Recursos_Educacionais/Marketing_Digital_iNBCUHuVJ.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1642627361170', 4.0, 26);
INSERT INTO tb_course (id, registration_date) VALUES (3, TIMESTAMP WITH TIME ZONE '2021-08-09 01:09:28-04:42:46');

INSERT INTO tb_collection (title, description, link, platform, image, score, count) VALUES ('Formação Figma', 'Aprenda a desenvolver interfaces para sites e aplicativos no Figma com soluções inteligentes e bom design gráfico', 'https://www.alura.com.br/formacao-figma', 'Alura', 'https://ik.imagekit.io/zqxyh6u3ylz/Recursos_Educacionais/UI_dWl7ZF8anSO.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1642627479528', 4.9, 75);
INSERT INTO tb_course (id, registration_date) VALUES (4, TIMESTAMP WITH TIME ZONE '2021-04-12 01:09:28-04:42:46');

INSERT INTO tb_collection (title, description, link, platform, image, score, count) VALUES ('Adobe Lightroom: lidando com aplicações profissionais', 'Curso com foco no domínio total do Adobe Lightroom, com ênfase em fotografia e criatividade de forma altamente produtiva', 'https://www.alura.com.br/curso-online-adobe-lightroom-aplicacoes-profissionais', 'Alura', 'https://ik.imagekit.io/zqxyh6u3ylz/Recursos_Educacionais/Lightroom_8jWQfpj20.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1642627842428', 4.4, 52);
INSERT INTO tb_course (id, registration_date) VALUES (5, TIMESTAMP WITH TIME ZONE '2020-12-12 01:09:28-04:42:46');

INSERT INTO tb_collection (title, description, link, platform, image, score, count) VALUES ('Programação em Python do básico ao avançado', 'Aprenda Python 3.8.5 com Expressões Lambdas, Iteradores, Geradores, Orientação a Objetos e muito mais', 'https://www.udemy.com/course/curso-de-programacao-em-python-do-basico-ao-avancado/', 'Udemy', 'https://ik.imagekit.io/zqxyh6u3ylz/Recursos_Educacionais/python_PXDIOn0Dc.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1643671737056', 4.6, 98);
INSERT INTO tb_course (id, registration_date) VALUES (6, TIMESTAMP WITH TIME ZONE '2022-01-01 01:09:28-04:42:46');

INSERT INTO tb_collection (title, description, link, platform, image, score, count) VALUES ('Automação Industrial em Ambiente Virtual', 'Programação de CLP, Sistema Supervisório com o simulador de processos industriais Factory I/O', 'https://www.udemy.com/course/automacao-industrial-em-ambiente-virtual/', 'Udemy', 'https://ik.imagekit.io/zqxyh6u3ylz/Recursos_Educacionais/automacao-industrial-title_zqdWhfD84.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1643672135639', 4.4, 103);
INSERT INTO tb_course (id, registration_date) VALUES (7, TIMESTAMP WITH TIME ZONE '2021-11-20 01:09:28-04:42:46');

INSERT INTO tb_collection (title, description, link, platform, image, score, count) VALUES ('O Guia para Desenvolvimento de Jogos com Unity', 'Criado em parceria com a Unity Technologies: aprenda C# desenvolvendo jogos 2D e 3D com este guia abrangente', 'https://www.udemy.com/course/o-guia-definitivo-para-desenvolvimento-de-jogos-com-unity/', 'Udemy', 'https://ik.imagekit.io/zqxyh6u3ylz/Recursos_Educacionais/unity_tU_Pky5fDya.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1643672313014', 4.6, 150);
INSERT INTO tb_course (id, registration_date) VALUES (8, TIMESTAMP WITH TIME ZONE '2022-06-28 01:09:28-04:42:46');

INSERT INTO tb_collection (title, description, link, platform, image, score, count) VALUES ('SAP com Excel e VBA: Automatize suas Atividades no SAP', 'Curso Automação do SAP com Excel e Visual Basic: Confira Este Incrível Curso Online de SAP com Excel e VBA: Automatize suas Atividades no SAP, Ministrado por Ivair Cláudio Ferrari na CuboUP', 'https://cuboup.com/br/courses/sap-com-excel-e-vba-automatize-suas-atividades-no-sap/', 'Cubo Up', 'https://ik.imagekit.io/zqxyh6u3ylz/Recursos_Educacionais/SAP_LG4Dtrbvy.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1643673156563', 4.1, 65);
INSERT INTO tb_course (id, registration_date) VALUES (9, TIMESTAMP WITH TIME ZONE '2020-10-10 01:09:28-04:42:46');

INSERT INTO tb_collection (title, description, link, platform, image, score, count) VALUES ('I Simpósio Nacional de Farmácia Industrial', 'O evento tem o objetivo de promover a partilha de conhecimento acerca da farmácia industrial para a comunidade estudantil. Pretende-se direcionar estudantes de todo Brasil acerca dos percursos curriculares, conhecimentos e valores prezados pelo setor, esclarecendo dúvidas e provendo conhecimento técnico e científico no âmbito dos setores que compõem os diferentes tipos de indústria farmacêutica no país', 'https://www.even3.com.br/sinafi2021/', 'Sinafi', 'https://ik.imagekit.io/zqxyh6u3ylz/Recursos_Educacionais/i-simposio-de-farmacia-unitpac-evento-852_Na6XpqaL1O.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643063231809', 4.8, 77);
INSERT INTO tb_event (id, start_date, end_date) VALUES (10, TIMESTAMP WITH TIME ZONE '2021-10-29 00:00:00-00:00:00', TIMESTAMP WITH TIME ZONE '2021-10-30 00:00:00-00:00:00');

INSERT INTO tb_collection (title, description, link, platform, image, score, count) VALUES ('Semana Spring React', 'Evento online com o objetivo de compartilhar o conhecimento necessário para que os alunos conheçam o caminho para se tornarem desenvolvedores profissionais, aptos ao mercado de trabalho', 'https://devsuperior.com.br/evento-sds', 'DevSuperior', 'https://ik.imagekit.io/zqxyh6u3ylz/Recursos_Educacionais/271688590_461269262260971_2273913194088566283_n_53f4FbGV5x.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1643064380299', 5.0, 152);
INSERT INTO tb_event (id, start_date, end_date) VALUES (11, TIMESTAMP WITH TIME ZONE '2022-05-09 00:00:00-00:00:00', TIMESTAMP WITH TIME ZONE '2022-05-15 00:00:00-00:00:00');

INSERT INTO tb_tag (name) VALUES ('Front-end');
INSERT INTO tb_tag (name) VALUES ('Back-end');
INSERT INTO tb_tag (name) VALUES ('HTML');
INSERT INTO tb_tag (name) VALUES ('CSS');
INSERT INTO tb_tag (name) VALUES ('Javascript');
INSERT INTO tb_tag (name) VALUES ('Typescript');
INSERT INTO tb_tag (name) VALUES ('React');
INSERT INTO tb_tag (name) VALUES ('UX Design');
INSERT INTO tb_tag (name) VALUES ('UI Design');
INSERT INTO tb_tag (name) VALUES ('Gestão');
INSERT INTO tb_tag (name) VALUES ('Adobe');
INSERT INTO tb_tag (name) VALUES ('Edição de Fotos');
INSERT INTO tb_tag (name) VALUES ('Data Science');
INSERT INTO tb_tag (name) VALUES ('Unity');
INSERT INTO tb_tag (name) VALUES ('Jogos');
INSERT INTO tb_tag (name) VALUES ('SAP');
INSERT INTO tb_tag (name) VALUES ('Excel');
INSERT INTO tb_tag (name) VALUES ('Automação');

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

INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (1, 1);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (1, 3);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (1, 4);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (1, 5);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (2, 10);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (3, 10);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (4, 8);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (4, 9);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (5, 11);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (5, 12);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (6, 13);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (7, 18);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (8, 16);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (8, 15);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (9, 16);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (9, 17);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (11, 1);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (11, 2);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (11, 3);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (11, 4);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (11, 5);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (11, 6);
INSERT INTO tb_collection_tag (collection_id, tag_id) VALUES (11, 7);

INSERT INTO tb_resource_tag (resource_id, tag_id) VALUES (1, 1);
INSERT INTO tb_resource_tag (resource_id, tag_id) VALUES (1, 3);
INSERT INTO tb_resource_tag (resource_id, tag_id) VALUES (1, 4);
INSERT INTO tb_resource_tag (resource_id, tag_id) VALUES (2, 1);
INSERT INTO tb_resource_tag (resource_id, tag_id) VALUES (2, 3);
INSERT INTO tb_resource_tag (resource_id, tag_id) VALUES (2, 5);
INSERT INTO tb_resource_tag (resource_id, tag_id) VALUES (3, 13);
INSERT INTO tb_resource_tag (resource_id, tag_id) VALUES (4, 16);
INSERT INTO tb_resource_tag (resource_id, tag_id) VALUES (4, 17);

INSERT INTO tb_collection_resource (collection_id, resource_id) VALUES (1, 1);
INSERT INTO tb_collection_resource (collection_id, resource_id) VALUES (1, 2);
INSERT INTO tb_collection_resource (collection_id, resource_id) VALUES (6, 3);
INSERT INTO tb_collection_resource (collection_id, resource_id) VALUES (9, 4);
INSERT INTO tb_collection_resource (collection_id, resource_id) VALUES (11, 1);
INSERT INTO tb_collection_resource (collection_id, resource_id) VALUES (11, 2);