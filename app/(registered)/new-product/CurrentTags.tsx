import { Tags } from "@/types"
interface Props {
    tags: Tags[]
    settags: (tags: Tags[]) => void
}

const CurrentTags = ({ tags, settags: setTags }: Props) => {
    
    const removetag = (id: string) => {
        const newTags = tags.filter(tag => tag.id !== id);
        setTags(newTags)
    }

    return (
        <ul className="tags-all show-tags">
            {tags?.map(tag => (
                <li key={tag.id}>
                    {tag.tag}
                    <button
                    className="remove-item"
                    onClick={() => removetag(tag.id)}>
                    &times;
                    </button>
                </li>
            ))}
        </ul>
      );
}
 
export default CurrentTags;