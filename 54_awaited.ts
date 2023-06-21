type FromPromise = Awaited<Promise<number>>; //type FromPromise = number
type FromPromise2 = Awaited<Promise<Promise<number>>>; //type FromPromise = number


interface UserTest {
    name: string;
}

async function fetchUsers(): Promise<UserTest[]> {
    const users: UserTest[] = [
        {
            name: "Alex",
        }
    ];

    return users;
}

const users = fetchUsers();

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>; //type FetchUsersReturnType = UserTest[]

type UnwrappedPromise<T> = T extends Promise<infer Return> ? Return : T;
type FetchDataReturnType = UnwrappedPromise<ReturnType<typeof fetchUsers>>; //type FetchDataReturnType = UserTest[]