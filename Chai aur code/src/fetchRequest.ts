interface UserResponseData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    if (!response.ok) {
      throw new Error(`Error in hTTP`);
    }

    const responseData: UserResponseData = await response.json();
  } catch (error: any) {
    console.log(error.message);
  }
};
