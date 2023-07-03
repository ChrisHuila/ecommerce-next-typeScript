import { Tags } from "@/types"
interface Props {
    tags: Tags[]
    showtags: boolean
    settags: (tags: Tags[]) => void
    setShowTags: (show: boolean) => void
}

const CurrentTags = ({ tags, settags: setTags, showtags, setShowTags }: Props) => {
    
    const removetag = (id: string) => {
        const newTags = tags.filter(tag => tag.id !== id);
        setTags(newTags)
    }

    return (
        <ul className={`tags-all ${showtags? 'show-tags': ''}`}>
            {tags?.map(tag => (
                <li key={tag.id} >
                    {tag.tag}
                    <button
                    className="remove-tags"
                    onClick={() => {
                        removetag(tag.id)
                        if(tags.length === 1) setShowTags(false)
                        }}>
                    &times;
                    </button>
                </li>
            ))}
        </ul>
      );
}
 
export default CurrentTags;