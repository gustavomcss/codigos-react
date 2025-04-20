interface Props {
    title: string;
    content: string;
    commentsQty: number;
    tags: string[];

    category: Category;
};

export enum Category {
    JS = "JavaScript",
    TS = "TypeScript",
    P = "Python"
};

const Destructuring = ({ title, content, commentsQty, tags, category }: Props) => {
    return (
        <>
            <div className="Destructuring">
                <h1>{title}</h1>
                
                <p>{content}</p>
                <p>Comments: ({commentsQty})</p>

                <div>
                    {tags.map((tag) => (
                        <span>#{tag} </span>
                    ))}
                </div>

                <p>Category: {category}</p>
            </div>
        </>
    );
};

export default Destructuring;