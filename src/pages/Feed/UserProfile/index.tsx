import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { API } from '../../../lib/axios'
import { useEffect, useState } from 'react'
import {
  UserInfoContainer,
  UserProfileContainer,
  UserProfileHeader,
} from './styles'

interface User {
  avatarUrl: string
  name: string
  bio: string
  followers: number
  company: string
  login: string
  profileLink: string
}

export function UserProfile() {
  const [user, setUser] = useState<User>({} as User)

  const fetchUser = async () => {
    const response = await API.get('/users/AronAdamsRapetto')

    const {
      name,
      login,
      avatar_url: avatarUrl,
      followers,
      company,
      bio,
      html_url: htmlUrl,
    } = response.data

    setUser({
      name,
      login,
      avatarUrl,
      followers,
      company,
      bio,
      profileLink: htmlUrl,
    })
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <UserProfileContainer>
      <img src={user.avatarUrl} alt="" />
      <div>
        <UserProfileHeader>
          <h1>{user.name}</h1>
          <a href={user.profileLink} target="_blank" rel="noreferrer">
            <span>GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </UserProfileHeader>
        <span>{user.bio}</span>
        <UserInfoContainer>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{user.login}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>{user.company ? user.company : 'Vazio'}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{`${user.followers} seguidores`}</span>
          </div>
        </UserInfoContainer>
      </div>
    </UserProfileContainer>
  )
}
