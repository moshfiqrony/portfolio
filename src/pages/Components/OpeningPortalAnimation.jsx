import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import HomeButton from '../../components/HomeButton';
import { PrimaryButton, TextButton } from '../../components/common/Buttons';

export default function OpeningPortalAnimation() {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef(null);
    const buttonRect = buttonRef.current?.getBoundingClientRect();

    return (
        <div className="p-4 flex items-start justify-center h-screen">
            <PrimaryButton
                ref={buttonRef}
                className="mt-[120px]"
                onClick={() => setIsOpen(true)}
            >
                Opening portal animation
            </PrimaryButton>

            {isOpen && (
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0,
                        x: -buttonRect.top,
                        y: -buttonRect.left,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        x: 0,
                        y: 0,
                    }}
                    transition={{
                        ease: 'easeInOut',
                    }}
                    className="fixed flex-col flex items-center justify-center z-[999999] max-h-screen h-screen w-full bg-white"
                >
                    <div className="max-w-[512px] flex gap-4 flex-col">
                        <p className="text-lg font-medium">
                            What is Lorem Ipsum?
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </p>

                        <p className="text-lg font-medium mt-3">
                            Why do we use it?
                        </p>
                        <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using
                            'Content here, content here', making it look like
                            readable English. Many desktop publishing packages
                            and web page editors now use Lorem Ipsum as their
                            default model text, and a search for 'lorem ipsum'
                            will uncover many web sites still in their infancy.
                            Various versions have evolved over the years,
                            sometimes by accident, sometimes on purpose
                            (injected humour and the like).
                        </p>
                    </div>
                    <TextButton onClick={() => setIsOpen(false)}>
                        Close
                    </TextButton>
                </motion.div>
            )}

            <HomeButton />
        </div>
    );
}
