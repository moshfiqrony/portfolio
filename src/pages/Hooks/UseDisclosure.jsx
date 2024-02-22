import { Layout } from '../../components/common/Layouts';
import List from '../../components/common/List';
import ListItem from '../../components/common/ListItem';

const content = {
    props: [
        {
            name: 'isOpen',
            type: 'boolean',
            description:
                'A boolean that indicates whether the disclosure component is open',
        },
        {
            name: 'isAlive',
            type: 'boolean',
            description:
                'A boolean that indicates whether the disclosure component is alive',
        },
        {
            name: 'onOpen',
            type: 'function',
            description: 'A function that sets the state to "OPEN"',
        },
        {
            name: 'onClose',
            type: 'function',
            description:
                'A function that sets the state to "CLOSED" and waits for the delay before setting the state to "DESTROYED"',
        },
        {
            name: 'onToggle',
            type: 'function',
            description:
                'A function that toggles the state between "OPEN" and "CLOSED"',
        },
    ],
};

export default function UseDisclosure() {
    return (
        <Layout
            header="useDisclosure hook"
            description="The useDisclosure hook is a custom hook that manages the state
        of a disclosure component. It returns an object with the
        following properties and functions"
        >
            <List heading={'Properties and Functions'}>
                {content.props.map((prop) => (
                    <ListItem key={prop.name}>
                        <span className="font-semibold">{prop.name}</span> -{' '}
                        {prop.description}
                    </ListItem>
                ))}
            </List>
        </Layout>
    );
}
