import React, { Component } from 'react'
import{ fetchRRSessions, deleteSession } from "../../actions/rrSessionActions"
import RRSessionStore from "../../stores/rrSessionStore"
import ClubStore from "../../stores/clubStore"
import { browserHistory } from 'react-router'
import { List, ListItem } from "material-ui/List"
import Avatar from "material-ui/Avatar"
import Subheader from "material-ui/Subheader"
import Divider from "material-ui/Divider"
import IconButton from 'material-ui/IconButton/IconButton'
import Edit from 'react-icons/lib/md/edit'
import View from 'react-icons/lib/md/pageview'
import Event from 'react-icons/lib/md/event'
import moment from 'moment'
class RoundRobinSessions extends Component {
    constructor(props) {
        super(props);
        this.state = {
          results: null
        }
    }
    componentWillMount(){
      this.rrsListener = RRSessionStore.addListener(this._fetchedRRSessions);
      const results = RRSessionStore.all();
      if (results) {
        this.setState({ results })
      } else {
        fetchRRSessions(this.props.club._id);
      }
    }
    _fetchedRRSessions = () => {
      this.setState({
        results: RRSessionStore.all()
      })
    }
    editResult(id){
      browserHistory.push("/club/sessions/" + id);
    }

    deleteResult = (id) => {
      deleteSession(id);
    }
    viewResult(id){

    }
    componentWillUnmount() {
      if (this.rrsListener) this.rrsListener.remove();
    }

    render() {
      if (!this.props.club || !this.state.results){
        return <div>Loading....</div>
      }
      return (<div className="sessions-list">
        <List>
          <Subheader inset={true}>Pending Sessions</Subheader>
          {
            this.state.results.filter(r => !r.finalized).map( (result) => (
             <ListItem key={result.id} 
              onClick={this.editResult.bind(this, result.id)}
              leftAvatar={<Avatar icon={<Event />} />} 
              primaryText={moment(result.date).format("MMMM DD, YYYY")}
              rightIcon={<Edit />}
              />
            ))
          }
        </List>
        <Divider inset={true} />
        <List>
          <Subheader inset={true}>Saved Sessions</Subheader>
          {
            this.state.results.filter(r => r.finalized).map( (result) => (
              <ListItem key={result.id} 
                onClick={this.viewResult.bind(this, result.id)}
                leftAvatar={<Avatar icon={<Event />} />} 
                primaryText={moment(result.date).format("MMMM DD, YYYY")}
                rightIcon={<View />}
              />
            ))
          }
        </List>
      </div>)
    }
}


export default RoundRobinSessions;