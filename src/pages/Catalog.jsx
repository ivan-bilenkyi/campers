import {Filter} from "../components/Filters/Filter.jsx";
import {CamperList} from "../components/CamperList/CamperList.jsx";
import { Container, Section } from '../components/Container.styled.js';


export default function Catalog() {



    return (
        <Section>
            <Container>
                <Filter />
                <CamperList/>
            </Container>
        </Section>
    );
}