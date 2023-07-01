import { Tags } from "@/types"
interface Props {
    tags: Tags[]
    settags: (tags: Tags[]) => void
}

const CurrentTags = ({ tags, settags: setTags }: Props) => {
    return (
        <ul className="tags-all show-tags">
            {tags?.map(tag => (
                <li key={tag.id}>{tag.tag}</li>
            ))}
        </ul>
      );
}
 
export default CurrentTags;