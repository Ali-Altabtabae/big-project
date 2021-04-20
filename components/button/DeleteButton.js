import { observer } from "mobx-react";
import authStore from "../../stores/authStore";

const DeleteTeam = (props) => {
  const handleDelete = (event) => {
    event.preventDefault();
    authStore.deleteTeams(props.team);
  };
  return (
    <button onClick={handleDelete} member={props.team}>
      Delete
    </button>
  );
};

export default observer(DeleteTeam);
