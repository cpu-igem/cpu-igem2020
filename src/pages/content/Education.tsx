import React from 'react';
import H2 from './comps/TRH2';
import { assets } from '../../assets-path.json';
import { ImageWithShadow } from './comps/ImageWithShadow';
import { Link } from './comps/Link';
import { DocOrderedList, DocUnorderedList } from './comps/DocList';

const ed=assets.pages.PublicEngagement;

export const body = {
    hasInfobar: true,
    hasRating: true,
    translatable: true,

    title: 'Education',
    hasAside: true,
    content: (<>
        <div>
            <h1>Education and Public Engagement</h1>

            <p>We educated high schools and elementary schools about science and promoted generative biology, which was very well received. In order to attract more people to learn about synthetic biology and to stimulate interest in it, we held a lecture on synthetic biology for teenagers in the school playground.
In addition, we designed a club carnival to involve students; we experimented with a new form of science - game cards - to promote the concept of alcohol dependence in situational reenactments and to cause the public to reflect on alcohol culture. The relevant scientific articles published on the public platform, WeChat, and the preparation of a popular science booklet also provided a way to learn more about synthetic biology and our project.</p>
            <H2>Education</H2>
            <h3>A lecture on our iGEM project at Nanjing Foreign Language School (NFLS)</h3>
            <p>We delivered a lecture on our iGEM project at Nanjing Foreign Language School (NFLS). Before the lecture, we went to the Jiangsu Provincial People&#39;s Hospital together to do doctor and patient questionnaires. They showed great interests in our project, so we arranged the time and went to their school to introduce our project thoroughly to help them better understand our purpose. In the lecture, the students showed great interest in project and we were impressed with the thoughtful questions they asked, which gave us many insights to the future application of our project.</p>
            <p><ImageWithShadow noShadow src={ed.fig12$jpg} caption='Fig1.A team member is lecturing on our iGEM project at NFLS' /></p>
            <p><ImageWithShadow noShadow src={ed.fig13$jpg} caption='Fig2.A team member is lecturing on our iGEM project at NFLS' /></p>
            <p><ImageWithShadow noShadow src={ed.fig14$jpg} caption='Fig3.Photo of team members with NFLS'/></p>
            <h3>A lecture on synthetic biology and our iGEM project at Nanjing No.13 High School</h3>
            <p>We delivered a lecture on synthetic biology and our iGEM project at Nanjing No.13 High School. During the lecture, we introduced the concept of synthetic biology and the project we do this year. Although it may be a little difficult for them to understand our project thoroughly, they still listened carefully and showed great interest in synthetic biology. After the lecture, a student who would like to study pharmacy in the future shared her family’s drinking story, and she hoped that this research could have a final product to help the need.</p>
            <p><ImageWithShadow noShadow src={ed.fig15$jpg}caption='Fig4.A team member is lecturing on the inspiration of our iGEM project at Nanjing No.13 High School' /></p>
            <p><ImageWithShadow noShadow src={ed.fig17$jpg}caption='Fig5.A team member is lecturing on synthetic biology and our iGEM project at Nanjing No.13 High School' /></p>
            <p><ImageWithShadow noShadow src={ed.fig16$jpg}caption='Fig6.Team members are at Nanjing No.13 High School' /></p>
            <h3>Youth Synthetic Biology Discussion Meeting</h3>
            <p>In order to attract more people to learn about synthetic biology and stimulate everyone&#39;s interest in synthetic biology, we held a seminar on synthetic biology for young people in the school playground. We advertised this rally on social media. Students can participate without registration. Many students who play sports on the playground have even joined us. Everyone generally said that this type of discussion is very interesting and broadens the horizon.</p>
            <p>The meeting atmosphere is relaxed and pleasant. The core issues we discussed are:</p>
            <DocOrderedList items={[
                <p>What is synthetic biology?</p>,
                <p>What problems can synthetic biology solve in real life?</p>
            ]}></DocOrderedList>

            <p>Considering that most of the students involved do not have a biological background, we introduce a few examples and try to be concise and clear. Everyone exchanged their views.</p>
            <p><ImageWithShadow noShadow src={ed.fig18$jpg}caption='Fig7.Youth Synthetic Biology Discussion Meeting' /></p>
            <h3>Laboratory open day</h3>
            <p>We invited undergraduates of China Pharmaceutical University who are interested in synthetic biology to visit our laboratory. We introduced our experiments and basic knowledge of synthetic biology to them. We hope to promote the knowledge of synthetic biology and attract more undergraduates to participate in the study and work of synthetic biology.</p>
            <p><ImageWithShadow noShadow src={ed.fig5$png} caption='Fig8.Laboratory open day'/></p>
            <p><ImageWithShadow noShadow src={ed.fig6$png}caption='Fig9.Laboratory open day' /></p>
            <p><ImageWithShadow noShadow src={ed.fig7$png} caption='Fig10.Laboratory open day'/></p>
            <H2>Card game</H2>
            <DocUnorderedList items={[
                <p>Background<br />China has a long wine culture, parties and social drinking scenes are very common. Through research and interviews over the summer, we learned that in the social environment where alcohol culture permeates,many people face a trade-off between drinking and work, social life, which can be harmful to their health. The Golden Mean is an important part of Chinese wisdom, which can also be seen in people&#39;s attitude towards alcohol - drinking in moderation does not harm the body, but the standard of &quot;moderation&quot; is not precisely defined, which becomes the reason for drinking at parties and social gatherings and the indulgence of drinkers.<br />Alcoholic liver disease is one of the dangers of alcohol to a person&#39;s health. Treatment alone is not enough, but only by increasing public awareness of the dangers of alcohol and the many hazards of alcohol can it be eliminated at its source. In order to enhance people&#39;s understanding of the choices of drinking in various social situations, and awareness of the dangers of drinking, we have designed a series of card games.</p>,
                <p>Introduction to the game<br />Lico, the protagonist of the card, is a young worker with drinking habits. By giving scenes such as parties, social gatherings, drinking and health examination, players help Lico to make drinking, not drinking and other choices, affecting his or her health, work and other attributes.<br />In order to increase the interactivity and fun of the game, we have improved the game for several versions, and tested it in different groups of people, and got nice responses.
                    <br /><Link href={ed.game_manuals_answer_book$pdf}>Game manuals &amp; answer book.pdf</Link>
                    <br />Try the game!</p>,
                <p>Attached here is a set of electronic CARDS, including game manuals, story cards, identity cards, answer books, download and print! So that you could participate in this game with your family and friends!</p>,
                <p>How to play<br />Six players are required to participate in the game, one is the moderator and scorekeeper, the other five players need to determine the identity of the players by drawing identity cards. The moderator holds the answer resolution book and determines whether the game will continue or continue based on the scoring of each player&#39;s choices each round. The five players&#39; identities are wife Helen, friend Alex, colleague Ethen, client Tim and doctor Laura, which represent the five attributes of the protagonist Lico - family, mood, social life, work and health. The initial value of each attribute is 60, with a maximum of 100. Once the value reaches zero, the protagonist, Rico, dies and the player fails. The game is played from  Lico&#39;s point of view, describing the scenes Lico encounters in his or her life. The player draws an identity card, turns over the story cards, and then makes a choice based on the scenario and options given in the question - each choice the player makes in the game will change Lico&#39;s attribute value, but the player does not know how each choice will increase or decrease the attribute value. The player is not aware of the increase or decrease in the value of each choice. The player must try to keep the hero Lico&#39;s attribute value greater than zero, so that he or she can survive until the end of the game.</p>,
                <p>After the demo, we got the following suggestions:
                        <DocOrderedList items={[
                        <p>The character design, the five players&#39; identity and background is not very relevant to the game itself, this part should be considered to delete;</p>,
                        <p>The game plot should have a clear timeline, so that readers can connect the before and after the plot;</p>,
                        <p>Educational games should consider how to promote, so that more people can participate in it.</p>,
                    ]}></DocOrderedList>
                </p>,
                <p>Our reflections have led to the following improvements to the game.
                        <DocOrderedList items={[
                        <p>Weaken the introduction of characters&#39; backgrounds, emphasize the giving of scenes, reproduce characters&#39; inner conflicts, and strengthen the dramatic tension;</p>,
                        <p>According to the logical order, adjust and rationalize the plot order of the game;</p>,
                        <p>To facilitate the promotion of the game, we have made electronic versions of identity cards, story cards, game manuals and answer analysis books, which can be downloaded from the Internet and printed on ordinary white paper. The dotted line is cropped.</p>,
                    ]}></DocOrderedList>
                </p>,
                <p>We organized a trial game for the school students:</p>
            ]}></DocUnorderedList>

            <p><ImageWithShadow noShadow src={ed.fig1$png} caption='Fig11.Story cards'/></p>
            <p><ImageWithShadow noShadow src={ed.fig2$jpg} caption='Fig12.Identity cards'/></p>
            <p><ImageWithShadow noShadow src={ed.fig3$jpg} caption='Fig13.User test'/></p>
            <p><ImageWithShadow noShadow src={ed.fig4$jpg}caption='Fig14.User test' /></p>
            <H2>Booklet</H2>
            <p>We have produced a booklet, introducing the development of alcoholic liver injury, the existing treatment system, and the design and purpose of our project. When conducting public interviews and patient interviews, we shared booklet with them and modified them based on their feedback to make our manual more readable. The final version of the popular science manual can be viewed in pdf version.</p>
            <p> <Link href={ed.brochure$pdf}>brochure.pdf</Link> </p>
            <H2>Club Carnival</H2>
            <p>Every year, each club of the school will hold a club carnival to introduce and promote all the clubs in the school to all freshmen.</p>
            <p>We introduced our club: CPU Bio-X Club. We have prepared microscopes for students to observe specimens and experience the fun of science. At the same time, we prepared the consumables commonly used in the laboratory, printed the logo of the club, and distributed it to the students as souvenirs, hoping to attract students&#39; attention to synthetic biology.</p>
            <p><ImageWithShadow noShadow src={ed.fig8$png}caption='Fig15.Club Carnival' /></p>
            <p><ImageWithShadow noShadow src={ed.fig9$jpg} caption='Fig16.Club Carnival'/></p>
            <p><ImageWithShadow noShadow src={ed.fig10$png}caption='Fig17.Club Carnival' /></p>
            <H2>Public science education on public platform</H2>
            <p>Our WeChat official account is iGEMerCPU. The public account aims to promote iGEM and synthetic biology, and it also records the bit by bit of our iGEMer every year.</p>
            <p>We share literature readings and research frontiers related to synthetic biology on the public platform. We have done the popularization of alcoholic liver disease and the promotion of the project on the public account.</p>
            <p><ImageWithShadow noShadow src={ed.fig11$jpg}caption='Fig18.One of the articles about our iGEM project and synthetic biology published on Wechat' /></p>
        </div> 
    </>)
}