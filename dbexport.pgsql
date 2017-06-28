--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.1
-- Dumped by pg_dump version 9.6.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner:
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner:
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: games; Type: TABLE; Schema: public; Owner: Jaiye
--

CREATE TABLE games (
    id integer NOT NULL,
    main character varying(100) NOT NULL,
    solution character varying(100) NOT NULL,
    gametype character varying(50) NOT NULL
);


--
--

CREATE SEQUENCE games_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE games_id_seq OWNED BY games.id;

ALTER TABLE ONLY games ALTER COLUMN id SET DEFAULT nextval('games_id_seq'::regclass);

COPY games (id, main, solution, gametype) FROM stdin;
1	http://i.imgur.com/kvToefa.jpg	http://i.imgur.com/z7BxMwH.jpg	imgAssoc
6	http://i.imgur.com/0XsFBQ4.png	n/a	decoy
7	http://i.imgur.com/rw4Q6Pn.png	n/a	decoy
8	http://i.imgur.com/zF0U9Pr.jpg	n/a	decoy
9	http://i.imgur.com/lyrD6Pq.jpg	n/a	decoy
10	http://i.imgur.com/uK3Yh0O.jpg	n/a	decoy
11	http://i.imgur.com/Qct8710.jpg	n/a	decoy
12	http://i.imgur.com/8HP99Hw.jpg	n/a	decoy
13	http://i.imgur.com/4I7rmI7.jpg	n/a	decoy
14	http://i.imgur.com/xFNrjPt.jpg	n/a	decoy
15	http://i.imgur.com/WjTvoeB.png	n/a	decoy
16	http://i.imgur.com/4AehZVQ.jpg	{ xLowLimit: 138, xHighLimit: 181, yLowLimit: 57, yHighLimit: 125 }	areaClick
17	http://i.imgur.com/4AehZVQ.jpg	{ xLowLimit: 138, xHighLimit: 181, yLowLimit: 57, yHighLimit: 125 }	dragDrop
\.


--
-- Name: games_id_seq; Type: SEQUENCE SET; Schema: public; Owner: Jaiye
--

SELECT pg_catalog.setval('games_id_seq', 20, true);


--
-- PostgreSQL database dump complete
--
