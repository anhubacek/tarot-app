export default function Lecture ({ params }: { params: { topic: string, type: string} }){
    
    return (
        <div>{params.topic}
        
        
        
        <h1>{params.type}</h1>
        </div>
      
    )
}