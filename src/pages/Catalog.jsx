import {Filter} from "../components/Filters/Filter.jsx";
import {CamperList} from "../components/CamperList/CamperList.jsx";
import {Container} from "../components/Container.styled.js";

export default function Catalog() {

    return (
        <section>
            <Container>
                <Filter/>
                <CamperList/>
            </Container>
        </section>
    );
}