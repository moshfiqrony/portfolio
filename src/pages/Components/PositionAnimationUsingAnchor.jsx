import { animate } from 'framer-motion';
import { useRef } from 'react';
import { PrimaryButton } from '../../components/common/Buttons';
import ExternalLink from '../../components/common/ExternalLink';
import { Layout } from '../../components/common/Layouts';
import Section from '../../components/common/Section';
import { REPO_URL } from '../../components/constants';
import useDisclosure from '../../hooks/useDisclosure';

export default function PositionAnimationUsingAnchor() {
    const { isAlive, isOpen, onClose, onOpen } = useDisclosure(500);
    const ref = useRef();
    const anchorRef = useRef();
    const anchorRect = anchorRef.current?.getBoundingClientRect();

    function handleClose() {
        onClose();
        animate(ref.current, {
            x: 0,
            y: 0,
            transition: {
                duration: 2,
            },
        });
    }

    function handleOpen() {
        onOpen();
        animate(ref.current, {
            x: 200,
            y: 200,
            transition: {
                duration: 2,
            },
        });
    }

    return (
        <Layout
            header="Position animation using anchor"
            description="A simple position animation using anchor element, framer-motion and useDisclosure hook. This procedure can be also helpful for creating a portal animation."
        >
            <div className="flex gap-4 flex-col">
                <Section id="source-code" heading="Source code">
                    <ExternalLink
                        href={`${REPO_URL}/pages/Components/PositionAnimationUsingAnchor.jsx`}
                    >
                        PositionAnimationUsingAnchor.jsx
                    </ExternalLink>
                </Section>

                <Section id="example" heading="Example">
                    <div className="p-8">
                        <PrimaryButton
                            onClick={() =>
                                isOpen ? handleClose() : handleOpen()
                            }
                        >
                            {isOpen ? 'Reset' : 'Move'}
                        </PrimaryButton>

                        <div ref={anchorRef} />
                        <div
                            {...(isAlive && {
                                style: {
                                    position: 'absolute',
                                    top: anchorRect?.top,
                                    left: anchorRect?.left,
                                },
                            })}
                            ref={ref}
                        >
                            <div className="w-[200px] h-[200px] bg-sky-300 mt-6"></div>
                        </div>
                    </div>
                </Section>
            </div>
        </Layout>
    );
}
