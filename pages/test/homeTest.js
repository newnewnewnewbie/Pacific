import React, {Component} from 'react';
import Link from "next/link";

class homeTest extends Component {
    render() {
        return (
            <div>
                <h2>homeTest!!</h2>
                <Link href="/">
                    <button>홈으로</button>
                </Link>
            </div>
        );
    }
}

export default homeTest;