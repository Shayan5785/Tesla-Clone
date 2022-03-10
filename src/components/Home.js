import Section from "./Section";
import styled from "styled-components";

function Home() {
    return ( 
        <Container>
            <Section
                title="Model S"
                description="Order Online for touchless delivery"
                backgroundImage="model-s.jpg"
                leftButton="CUSTOM ORDER"
                rightButton="EXISTING INVENTORY"
            />
            <Section
                title="Model Y"
                description="Order Online for touchless delivery"
                backgroundImage="model-y.jpg"
                leftButton="CUSTOM ORDER"
                rightButton="EXISTING INVENTORY"
            />
            <Section
                title="Model 3"
                description="Order Online for touchless delivery"
                backgroundImage="model-3.jpg"
                leftButton="CUSTOM ORDER"
                rightButton="EXISTING INVENTORY"
            />
            <Section
                title="Model X"
                description="Order Online for touchless delivery"
                backgroundImage="model-x.jpg"
                leftButton="CUSTOM ORDER"
                rightButton="EXISTING INVENTORY"
            />
            <Section
                title="Lowest Cost Solar Panels in Pakistan"
                description="Money-back Guarantee"
                backgroundImage="solar-panel.jpg"
                leftButton="ORDER NOW"
                rightButton="Learn More"
            />
            <Section
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a New Roof"
                backgroundImage="solar-roof.jpg"
                leftButton="ORDER NOW"
                rightButton="Learn More"
            />
            <Section
                title="Accessories"
                description=""
                backgroundImage="accessories.jpg"
                leftButton="ORDER NOW"
            />
        </Container>
     );
}

export default Home;

const Container = styled.div`
    height: 100vh;
`

