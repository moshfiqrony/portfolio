export default function List({ children, heading }) {
    return (
        <div className="List-root">
            <div className="List-heading text-lg font-medium">{heading}</div>
            <div className="List-listWrapper mt-2">
                <ul className="List-list">{children}</ul>
            </div>
        </div>
    );
}
