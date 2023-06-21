// type Configuration = {
//     protocol: 'https' | 'http';
//     port: 3001 | 3000;
// };

interface IConfig {
    protocol: 'https' | 'http';
    port: 3001 | 3000;
    log: (msg: string) => void;
}

interface IRole {
    role: string;
}

interface IConfigWithRole extends IConfig, IRole {
    test: string;
}

const serverCongiguration: IConfigWithRole = {
    protocol: 'https',
    port: 3001,
    role: 'admin',
    test: 'e2e',

    log: (msg: string): void => console.log(msg),
};

type StartFunctionType = (protocol: 'http' | 'https', port: 3000 | 3001, log: (msg: string) => void) => string;

const startServer4: StartFunctionType = (
    protocol: 'http' | 'https', 
    port: 3000 | 3001,
    log: (msg: string) => void
    ): 'Server strted' => {
        
        log(`Serever started on ${protocol}://serevr:${port}`); 
        return 'Server strted';
}

startServer4(serverCongiguration.protocol, serverCongiguration.port, serverCongiguration.log);


//Индексные свойста
interface Styles {
    [key: string]: string
}

const styles: Styles = {
    position: 'absolute',
    top: '20px',
    left: '50px',
    align: '50px',
};


//Фильтрация объектов через Интерфейсы
const sCongig: IBasicCinfig = {
    protocol: 'https',
    port: 3001,
    role: 'susadmin',
};

const bConfig: IBasicCinfig = {
    protocol: 'http',
    port: 3000,
};

interface IBasicCinfig {
    protocol: string;
    port: number;
    role?: string;
}

const startNewServer = (config: IBasicCinfig): 'Server strted' => {
    console.log(`Serever started on ${config.protocol}://serevr:${config.port}`); 
    return 'Server strted';
}

startNewServer(bConfig);
startNewServer(sCongig);

/////////////////////////////////
interface IAnimal {}

class Bird implements IAnimal {}

class Raven extends Bird {}

let bird: IAnimal = new Bird();
let raven: IAnimal = new Raven();