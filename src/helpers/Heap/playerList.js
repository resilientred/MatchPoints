// import store from 'redux/store';
// import { updatePlayerList } from 'redux/modules/newSession';

export default class PlayerList {
  constructor(schema) {
    this.schema = schema;
    this.playerList = schema.map(() => []);
    this.currentGroup = 0;
  }

  append(player) {
    const group = this.playerList[this.currentGroup];
    group.push(player);

    if (group.length >= this.schema[this.currentGroup]) {
      this.currentGroup++;
    }
  }

  toArray() {
    return this.playerList;
  }

  promote(group, idx) {
    if (group < 1 || idx < 0 || idx >= this.schema[group]) {
      return false;
    }
    const promoteTarget = this.playerList[group][idx];
    // swap with last member of the higher group
    const swapTargetGroup = this.playerList[group - 1];
    const swapTarget = swapTargetGroup[swapTargetGroup.length - 1];

    const targetGroupList = [
      swapTarget,
      ...this.playerList[group].slice(0, idx),
      ...this.playerList[group].slice(idx + 1),
    ];

    const swapGroupList = [
      ...swapTargetGroup.slice(0, -1),
      promoteTarget,
    ];
    this.playerList = [
      ...this.playerList.slice(0, group - 1),
      swapGroupList,
      targetGroupList,
      ...this.playerList.slice(group + 1),
    ];

    return true;
  }

  demote(group, idx) {
    if (group < 0 || group >= this.playerList.length ||
      idx < 0 || idx >= this.schema[group]) {
      return false;
    }
    const demoteTarget = this.playerList[group][idx];

    // swap with the first memebr of the lower group
    const swapTarget = this.playerList[group + 1][0];
    const targetGroupList = [
      ...this.playerList[group].slice(0, idx),
      ...this.playerList[group].slice(idx + 1),
      swapTarget,
    ];

    const swapGroupList = [
      demoteTarget,
      ...this.playerList[group + 1].slice(1),
    ];

    this.playerList = [
      ...this.playerList.slice(0, group),
      targetGroupList,
      swapGroupList,
      ...this.playerList.slice(group + 2),
    ];

    return true;
  }
}
