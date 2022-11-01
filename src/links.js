import './css/links.css'

const Links =()=>{
    const links = [
        {
            id: "twitter",
            title: "Twitter Link",
            url: "https://twitter.com/aduboat1"
        },
        {
            id: "btn_zuri",
            title: "Zuri Team",
            url: "https://training.zuri.team/",
        },
        {
            id: "books",
            title: "Zuri Books",
            url: "http://books.zuri.team",
            subtext: "Find zuri books about design and coding"
        },
        {
            id: "book__python",
            title: "Python Books",
            url: "https://books.zuri.team/python-for-beginners?ref_id=boatengcobbina",
            subtext: "Get your python books here"
        },
        {
            id: "pitch",
            title: "Background Check For Coders",
            url: "https://background.zuri.team/",
            subtext: "Pitch a service for some background checks on your coding skills"
        },
        {
            id: "book__design",
            title: "Design Books",
            url: "https://books.zuri.team/design-rules",
            subtext: "Get a copy of the free design book offered by Zuri"
        },
    ]
    return(
        <section className="links">
            {links.map((link, id) =>{
                return(
                    <div className={`link ${link.id}`}>
                        <a key={id} href={link.url} id={link.id}>
                            {link.title}
                        </a>
                        {link.subtext &&(<span class={`subtext subText-${link.id}`}>{link.subtext}</span>)}
                    </div>
                )
            }
            
            )}
        </section>
    )
}


export default Links;