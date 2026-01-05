import { LogoHeader } from '@/components/svg/LogoHeader'
import { FiverrProHeader } from '@/components/headerCmps/FiverrProHeader'
import { useDropdown } from '@/hooks/useDropdown'

export function AppHeader() {
  const { openDd, toggleDd, rootRef } = useDropdown()

  return (
    <header ref={rootRef} className="app-header">
      <div className="app-header-row">
        <div className="app-header-inner grid align-center">
          <LogoHeader />

          <nav className="header-nav grid align-center" aria-label="Header">
            <div className="nav-group nav-group-dd grid align-center">
              <div className="nav-dd">
                <button
                  type="button"
                  className="nav-dd-trigger"
                  aria-expanded={openDd === 'pro'}
                  aria-haspopup="menu"
                  onClick={() => toggleDd('pro')}
                >
                  Fiverr Pro
                  <span
                    className={`nav-arrow-down ${openDd === 'pro' ? 'is-open' : ''}`}
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </button>

                {openDd === 'pro' && (
                  <div
                    className="nav-dd-panel nav-dd-panel-pro"
                    role="menu"
                    aria-label="Fiverr Pro"
                  >
                    <FiverrProHeader />
                  </div>
                )}
              </div>

              <div className="nav-dd">
                <button
                  type="button"
                  className="nav-dd-trigger"
                  aria-expanded={openDd === 'explore'}
                  aria-haspopup="menu"
                  onClick={() => toggleDd('explore')}
                >
                  Explore
                  <span
                    className={`nav-arrow-down ${openDd === 'explore' ? 'is-open' : ''}`}
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </button>

                {openDd === 'explore' && (
                  <div
                    className="nav-dd-panel nav-dd-panel-explore"
                    role="menu"
                    aria-label="Explore"
                  >
                    <a className="nav-dd-item compact" href="#" role="menuitem">
                      <div className="nav-dd-title">Answers</div>
                      <div className="nav-dd-sub">
                        Powered by AI, answered by freelancers
                      </div>
                    </a>

                    <a className="nav-dd-item compact" href="#" role="menuitem">
                      <div className="nav-dd-title">Community</div>
                      <div className="nav-dd-sub">
                        Connect with Fiverr’s team and community
                      </div>
                    </a>

                    <a className="nav-dd-item compact" href="#" role="menuitem">
                      <div className="nav-dd-title">Guides</div>
                      <div className="nav-dd-sub">In-depth business guides</div>
                    </a>

                    <a className="nav-dd-item compact" href="#" role="menuitem">
                      <div className="nav-dd-title">Blog</div>
                      <div className="nav-dd-sub">News and community stories</div>
                    </a>

                    <a className="nav-dd-item compact" href="#" role="menuitem">
                      <div className="nav-dd-title">Logo Maker</div>
                      <div className="nav-dd-sub">Create your logo instantly</div>
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="nav-group nav-group-links grid align-center">
              <button type="button" className="header-link header-link-green">
                <span className="globe" aria-hidden="true">
                  🌐
                </span>
                English
              </button>

              <a className="header-link header-link-green" href="#">
                Become a Seller
              </a>
              <a className="header-link header-link-green" href="#">
                Sign in
              </a>
            </div>

            <a className="join-btn" href="#">
              Join
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
