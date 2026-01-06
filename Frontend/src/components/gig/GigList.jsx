import gGigs from '../../data/gig.json'

import { Link } from 'react-router-dom'
import { ToyPreview } from './ToyPreview'


export function ToyList() {

    return (
        <section className="toy-list container">
            <ul>
                {toys.map(gig => (
                    <li key={gig._id}>
                        <ToyPreview toy={gig} />
                        <div>
                            <button>
                                <Link to={`/toy/edit/${gig._id}`}>Edit</Link>
                            </button>
                            <button>Remove</button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

