import styles from '@/styles/pagination.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Posts({ posts }) {
    return (
        <div className={styles.gridContainer}>
            {posts.map(({ title, slug, eyecatch }) => (
                <article className={styles.post} key={slug}>
                    <Link legacyBehavior href={`/blog/${slug}`}>
                        <a>
                            <figure>
                                <Image
                                  src={eyecatch.url}
                                  alt=""
                                  layout="fill"
                                  objectFit='cover'
                                  size="(min-width: 1152px) 576px, 50vw"
                                />
                            </figure>
                            <h2>{title}</h2>
                        </a>
                    </Link>
                </article>
            ))}
        </div>
    )
}
