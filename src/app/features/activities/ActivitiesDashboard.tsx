import { Grid } from "semantic-ui-react"


function ActivitiesDashboard() {
  return (
    <Grid>
      <Grid.Column width={10}>
        <h2>Upcoming Events</h2>
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>News </h2>
      </Grid.Column>
    </Grid>
  )
}
export default ActivitiesDashboard