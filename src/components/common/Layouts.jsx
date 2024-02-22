export function Layout({ header, description, children }) {
    return (
        <div className="Layout-root flex justify-center">
            <div className="Layout-content w-full max-w-[1200px] p-4 flex flex-col gap-8">
                <div className="Layout-headerWrapper flex gap-4 flex-col">
                    <div className="Layout-heading text-4xl font-bold w-full text-center">
                        {header}
                    </div>
                    {description && (
                        <div className="Layout description text-center max-w-[512px] mx-auto">
                            {description}
                        </div>
                    )}
                </div>
                <div className="Layout-mainContent">{children}</div>
            </div>
        </div>
    );
}
