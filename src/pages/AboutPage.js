import { Col, Row, Container, Card, CardBody, CardHeader} from 'reactstrap';
import about_us from '../app/assets/img/about_us.webp';
import SubHeader from '../components/SubHeader';
import EventsList from '../features/events/EventsList';

const AboutPage = () => {
    return (
        <Container>
            <SubHeader current="Our Mission" />
            <Row className='row-content'>
                {/* <Col sm='6'> */}
                    <h3>Bringing the accordion to new generations!</h3>
                    <p>
                        Skyler Fell is the owner, inspirator, and, driving force behind The Accordion Apocalypse Repair Shop. Professionally trained by master craftsman and repair technician, Vincent Cirelli of Cirelli Accordion Service, and Boaz of the former Boaz Accordions. Skyler offers accordion sales & online store, hand tuning & repair, accordion workshops, rentals, lessons, accessories.
                    </p>
                    <p>
                        For 5 years Skyler studiously apprenticed with accordion guru Vince Cirelli. 
                    </p>
                    <p>
                        How the Accordion Apocalypse Started:
                    </p>
                    <p>
                        In the late 90's after seeing badass accordionists playing in punk bands at Gilman, including Oakland's all accordion creepy carnival band the dreaded Accordion Plague, The Hobo Goblins, and the all girl psycho-billy circus punk band Cypher in The Snow. I was hooked. "Where do I find such a beautiful and emotion producing instrument?....and so close to my eastern european roots." I soon discovered Boaz Accordions in Oakland, and started a work/trade cleaning and organizing accordion reeds by pitch for my first lessons and rental accordion to practice on. 
                    </p>
                    <p>
                        Later during my travels in Europe, I stayed at this amazing artists space, and played at a free winter circus class in Amsterdam. At school we learned juggling, accordion, massive jump ropes, stretching, unicycle, and all kinds of fun stuff. We would go out and busk on the town squares and busy streets. What FUN!
                    </p>
                    <p>
                        Upon my return to the Bay Area, I found a broken accordion that had fallen off some tall speaker stacks in an artists warehouse in the industrial district of San Francisco. I once again visited Boaz Accordions, and asked for some advice and a got repair estimate. Then I started a payment plan bringing them $20/week payment plan for my first accordion repair. After a cordial visit from me every week, and learning of our shared metalworking background, interest in fixin' stuff, and love of Klezmer music, eventually Boaz took me under his wing and offered me an accordion repair apprenticeship. Boaz put me to work first turning little tiny brass buttons on the jewelers lathe for a concertina, doing bellows repair, and refreshing the wax and leathers on older accordions. 
                    </p>
                    <p>
                        Between 2008 & 2012 Skyler studied & repaired with accordion guru, master repairman, and builder Vince Cirelli, December 21, 1920 - September 29, 2012. Vince Cirelli recently passed away. The life of this master accordion craftsman, repair technician, shop owner, teacher, father, husband, and excellent musician has left us all with heartfelt gratitude for a life of dedicated service to the accordion and the community surrounding it. Vince Cirelli was an amazing accordion guru and a guide who inspired and enriched Skyler's journey through life as an accordion shop owner and repair technician. Throughout his life he was a dedicated promotor of the accordion whether he was teaching accordion lessons to his students or being a world renowned repair person. Through Skylers 5 year apprenticeship, he shared with the knowledge, procedure, organization, and 'know how' necessary to continue this noble tradition. His deep understanding of accordions and repair will live on through Skylers hands and mind, and be used and appreciated by her skilled apprentices as well as the greater accordion community every day. For this we are forever grateful. Vince will be truly missed by his loyal apprentice, family, friends and accordionists around the world. Thank you Vince, may you rest in peace. 
                    </p>
                    <img src={about_us} alt="About" />
                {/* </Col> */}
                <Col sm='6'>
                    <Card>
                        <CardHeader className='bg-primary text-white'>
                            <h3>About Us</h3>
                        </CardHeader>
                        <CardBody>
                            <dl className='row'>
                                <dt className='col-6'>Founded</dt>
                                <dd className='col-6'>January 1, 2000</dd>
                                <dt className='col-6'>Company Statistic 1</dt>
                                <dd className='col-6'>000</dd>
                                <dt className='col-6'>Company Statistic 2</dt>
                                <dd className='col-6'>000</dd>
                                <dt className='col-6'>Employees</dt>
                                <dd className='col-6'>000</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Row className='bg-light mt-3'>
                        <CardBody>
                            <blockquote className='blockquote'>
                                <p>
                                Here is a link to an NPR interview with Vince & Skyler: 
                                </p>
                                <footer className='blockquote-footer'>
                                    <cite title='Source Title'>
                                        <a href="https://web.archive.org/web/20180521141351/http://squeezeboxstories.com/stories/story-one-master-craftsman-and-young-apprentice/" target="_blank" rel='noreferrer'>squeezeboxstories.com</a>
                                    </cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Row>
                </Col>
            </Row>
            <Row className='row-content'>
                <Col xs='12'>
                    <h3>Events</h3>
                    <EventsList />
                </Col>
            </Row>
        </Container>
    )
}

export default AboutPage;