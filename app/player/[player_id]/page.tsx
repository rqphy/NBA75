import styles from "../../css/player.module.css"
import { promises as fs } from "fs"
import Switch from "@/app/_components/Switch/Switch"
import playerList from "@/app/data/players.json"

interface pageProps {
    params: { player_id: string }
}

export default async function page({ params }: pageProps) {
    const player = playerList[Number(params.player_id)]

    return (
        <>
            <div className={styles.transition}></div>
            <section className={styles.player}>
                <div className={styles.container}>
                    <h1 className={styles.title}>{player.name}</h1>
                    <figure className={styles.banner}>
                        <img src="/banners/6781.jpg" alt={player.name} />
                    </figure>
                    <p className={styles.story}>{player.story}</p>
                </div>
            </section>
            <Switch currentId={Number(params.player_id)} />
        </>
    )
}
