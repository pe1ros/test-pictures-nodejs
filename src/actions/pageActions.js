export const GET_DATA = "GET_DATA";
export const PUT_DATA = "PUT_DATA";

export function getData() {
  return {
    type: GET_DATA,
  };
}
export function putData(data) {
  return {
    type: PUT_DATA,
    payload: data,
  };
}
