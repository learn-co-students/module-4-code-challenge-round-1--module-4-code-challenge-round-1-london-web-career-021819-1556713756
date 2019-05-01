import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    allBots: [],
    yourBots: []
  };

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(resp => resp.json())
      .then(json =>
        this.setState({
          allBots: json
        })
      );
  }

  // add bots to collection
  addBotToArmy = bot => {
    if (!this.state.yourBots.includes(bot)) {
      this.setState({
        yourBots: [...this.state.yourBots, bot]
      });
    }
  };

  // remove bots from collection
  removeBotFromArmy = bot => {
    this.setState({
      yourBots: this.state.yourBots.filter(b => b !== bot)
    });
  };

  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy
          yourBots={this.state.yourBots}
          removeBotFromArmy={this.removeBotFromArmy}
        />
        <BotCollection
          allBots={this.state.allBots}
          addBotToArmy={this.addBotToArmy}
        />
      </div>
    );
  }
}

export default BotsPage;
