import service_0 from './assets/services_0.jpg?format=webp';
import service_1 from './assets/services_1.jpg?format=webp';
import service_2 from './assets/services_2.jpg?format=webp';
import service_3 from './assets/services_3.jpg?format=webp';
import service_4 from './assets/services_4.jpg?format=webp';
import service_5 from './assets/services_5.jpg?format=webp';

import team_0 from './assets/team_0.jpg?format=webp';
import team_1 from './assets/team_1.jpg?format=webp';
import team_2 from './assets/team_2.jpg?format=webp';

const navItems = [
    { label: 'O nas', id: 'about' },
    { label: 'Specjalizacje', id: 'services' },
    { label: 'Zespół', id: 'team' },
    { label: 'Kontakt', id: 'contact' },
];

const opinions = [
    {
        id: 0,
        name: 'Adrian',
        description: 'Dzięki kancelarii udało się zakończyć moją sprawę spadkową bez stresu i zbędnych formalności. Profesjonalne podejście i świetny kontakt.',
    },
    {
        id: 1,
        name: 'John Doe',
        description: 'Zespół kancelarii był dostępny na każdym etapie mojej sprawy. Czułam się zaopiekowana i w pełni poinformowana. Polecam z całego serca.',
    },
    {
        id: 2,
        name: 'Jane Doe',
        description: 'Współpraca z kancelarią była bezproblemowa. Wszystko jasno wyjaśnione, a efekt końcowy lepszy niż się spodziewałem.',
    },
    {
        id: 3,
        name: 'Anna K.',
        description: 'Sprawa rodzinna, którą prowadziła kancelaria, była dla mnie bardzo trudna. Dzięki ich wsparciu przeszłam przez to spokojniej i z pozytywnym wynikiem.',
    },
];

const services = [
    {
        id: 0,
        name: 'Prawo cywilne',
        description: 'Pomagamy w sprawach majątkowych, spadkowych oraz roszczeniach z umów. Reprezentujemy klientów w sądzie i negocjacjach.',
        image: service_0
    },
    {
        id: 1,
        name: 'Prawo rodzinne',
        description: 'Wsparcie w sprawach rozwodowych, alimentacyjnych oraz dotyczących władzy rodzicielskiej. Działamy z wyczuciem i dyskrecją.',
        image: service_1
    },
    {
        id: 2,
        name: 'Prawo karne',
        description: 'Reprezentujemy oskarżonych i pokrzywdzonych na każdym etapie postępowania karnego. Skuteczna obrona i doradztwo.',
        image: service_2
    },
    {
        id: 3,
        name: 'Prawo pracy',
        description: 'Pomagamy pracownikom i pracodawcom w sprawach umów, wypowiedzeń, mobbingu i wypadków przy pracy.',
        image: service_3
    },
    {
        id: 4,
        name: 'Prawo gospodarcze',
        description: 'Kompleksowa obsługa prawna firm: zakładanie działalności, umowy handlowe, spory między przedsiębiorcami.',
        image: service_4
    },
    {
        id: 5,
        name: 'Odszkodowania',
        description: 'Uzyskujemy należne odszkodowania z tytułu wypadków, błędów medycznych i szkód majątkowych. Skutecznie i z zaangażowaniem.',
        image: service_5
    },
];

const team = [
    {
        id: 0,
        name: 'Jane Doe',
        role: 'Radca prawny',
        image: team_0,
        description: 'Specjalizuje się w prawie cywilnym oraz sprawach spadkowych. Ceniona za precyzję i podejście indywidualne do klienta.'
    },
    {
        id: 1,
        name: 'Jack Doe',
        role: 'Adwokat',
        image: team_1,
        description: 'Prowadzi sprawy karne i gospodarcze. Znany z analitycznego myślenia i skuteczności procesowej.'
    },
    {
        id: 2,
        name: 'Joanne Doe',
        role: 'Prawnik',
        image: team_2,
        description: 'Zajmuje się prawem rodzinnym i prawem pracy. Empatyczna, wspiera klientów w trudnych sytuacjach życiowych.'
    }
];

export { navItems, opinions, services, team }