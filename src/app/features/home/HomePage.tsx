import React from "react";
import {
  Grid,
  Header,
  Icon,
  
  Segment,
  
} from "semantic-ui-react";

const style = {
  h1: {
    marginTop: "3em",
  },
  h2: {
    margin: "4em 0em 2em",
  },
  h3: {
    marginTop: "2em",
    padding: "2em 0em",
  },
  last: {
    marginBottom: "300px",
  },
};

export default function HomePage() {
  return (
    <Segment>
      <Icon name='home' size='large' />
      <Header
        as="h1"
        content="HOME"
        
        // style={style.h3}
        textAlign="center"
      />
      
      <Grid container columns={2} doubling stackable>
        <Grid.Column width={12}>
          <Segment>
          <Header
        as="h3"
        content="About Us"
        // style={style.h3}
        textAlign="center"
      />
          </Segment>
        </Grid.Column>
        <Grid.Column width={4}>
          <Segment>
          <Header
        as="h3"
        content="News"
        // style={style.h3}
        textAlign="center" />
            
          </Segment>
        </Grid.Column>

        <Grid.Column width={12}>
          <Segment>
            <p>
              Amid Israel’s ongoing three-month war in Gaza, more than 23,000
            Palestinians, mostly women and children, have been killed, lawyers
            told the top United Nations court. Most of Gaza’s population of 2.3
            million has been displaced, and an Israeli blockade severely
            limiting food, fuel and medicine has caused a humanitarian
            “catastrophe”, according to the UN.
            </p>
              
          </Segment>
        </Grid.Column>
        <Grid.Column width={4}>
          <Segment>
          <p>
              Amid Israel’s ongoing three-month war in Gaza, more than 23,000
            Palestinians, mostly women and children, have been killed, lawyers
            told the top United Nations court. Most of Gaza’s population of 2.3
            million has been displaced, and an Israeli blockade severely
            limiting food, fuel and medicine has caused a humanitarian
            “catastrophe”, according to the UN.
            </p>
            </Segment>
        </Grid.Column>
        
      </Grid>
    </Segment>
  );
}
