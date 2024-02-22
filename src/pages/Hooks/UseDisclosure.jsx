import { useState } from 'react';
import { PrimaryButton } from '../../components/common/Buttons';
import CodeBlock from '../../components/common/CodeBlock';
import ExternalLink from '../../components/common/ExternalLink';
import { Layout } from '../../components/common/Layouts';
import List from '../../components/common/List';
import ListItem from '../../components/common/ListItem';
import Section from '../../components/common/Section';
import Select from '../../components/common/Select';
import { REPO_URL } from '../../components/constants';
import useDisclosure from '../../hooks/useDisclosure';

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
    ],
};

export default function UseDisclosure() {
    const [delay, setDelay] = useState(0);
    const { isOpen, onClose, onOpen, isAlive } = useDisclosure(delay);

    return (
        <Layout
            header="useDisclosure hook"
            description="The useDisclosure hook is inspired from ChakraUI and a custom hook that manages the state
        of a disclosure component. It returns an object with the
        following properties and functions."
        >
            <div className="flex gap-4 flex-col">
                <Section
                    heading="Properties and Functions"
                    id="properties-and-functions"
                >
                    <List>
                        {content.props.map((prop) => (
                            <ListItem key={prop.name}>
                                <span className="font-semibold">
                                    {prop.name}
                                </span>{' '}
                                - {prop.description}
                            </ListItem>
                        ))}
                    </List>
                </Section>

                <Section heading="Usage" id="usage">
                    <CodeBlock>
                        {`const {isOpen, onOpen, onClose, onToggle} = useDisclosure();`}
                    </CodeBlock>
                </Section>

                <Section heading="Example" id="example">
                    <Select
                        value={delay}
                        onChange={(e) => setDelay(parseInt(e.target.value))}
                    >
                        <option value="0">No delay</option>
                        <option value="100">100 milliseconds delay</option>
                        <option value="200">200 milliseconds delay</option>
                        <option value="300">300 milliseconds delay</option>
                        <option value="400">400 milliseconds delay</option>
                        <option value="500">500 milliseconds delay</option>
                        <option value="600">600 milliseconds delay</option>
                        <option value="700">700 milliseconds delay</option>
                        <option value="800">800 milliseconds delay</option>
                        <option value="900">900 milliseconds delay</option>
                        <option value="1000">1000 milliseconds delay</option>
                    </Select>

                    <div className="mt-4">
                        Now the hook will wait for{' '}
                        <span className="font-semibold">
                            {delay} milliseconds
                        </span>{' '}
                        and then make the{' '}
                        <span className="font-semibold">isAlive</span> state to{' '}
                        <span className="font-semibold">False</span>{' '}
                    </div>

                    <div className="mt-4">
                        <PrimaryButton onClick={isOpen ? onClose : onOpen}>
                            {isOpen
                                ? 'Click me to close'
                                : isAlive
                                ? 'Closing in progress...'
                                : 'Click me to open'}
                        </PrimaryButton>
                    </div>

                    <div className="mt-4">
                        When a component is hidden if we do not unmount it then
                        it will still call the component even if you do not see
                        it. This is where the this hook helps you. You can use a
                        delay to unmount the component after a certain time when
                        the animation is done. For example, You have a modal
                        that closes with an animation. If you directly render it
                        conditionally using a boolean state then the closing
                        animation will not take effect. But if you use this hook
                        then you can set a delay and after the delay, you can
                        use the isAlive state to unmount the component.
                    </div>
                </Section>

                <Section heading="Source code" id="source-code">
                    <ExternalLink href={`${REPO_URL}/hooks/useDisclosure.js`}>
                        useDisclosure.js
                    </ExternalLink>
                </Section>
            </div>
        </Layout>
    );
}
