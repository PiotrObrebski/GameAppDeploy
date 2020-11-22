/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export async function getDataFromServer(endPoint: string) {
  return fetch(endPoint)
    .then(data => data.json())
    .catch(e => {
      console.log(e);
      return e;
    });
}

export async function putScoreOnServer(
  endPoint:string,
  data: {
    user_id: string,
    score: string,
    game_id: string
  }
) {
  const formData = new FormData();
  formData.append('user_id', data.user_id);
  formData.append('score', data.score);
  formData.append('game_it', data.game_id);

  return fetch(endPoint, {
      method: 'PUT',
      body: formData
  }).then(response => response.json())
}
