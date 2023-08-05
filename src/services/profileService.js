import http from './httpService'

export function registerProfile(profile) {
    return http.post('srmapstudents/students/', profile)
}
export function updateProfile(profile) {
    console.log("hello")
    const body = { ...profile }
    delete body.id
    delete body.user_id
    if (body['last_name'] === '') {
        delete body.last_name
    }
    if (body['first_name'] === '') {
        delete body.first_name
    }
    if (body['section'] === '') {
        delete body.section
    }
    if (body['branch'] === '') {
        delete body.branch
    }
    if (body['github_username'] === '') {
        delete body.github_username
    }
    if (body['codechef_username'] === '') {
        delete body.codechef_username
    }
    if (body['leetcode_username'] === '') {
        delete body.leetcode_username
    }
    if (body['linkedin_username'] === '') {
        delete body.linkedin_username
    }
    if (body['hackerrank_username'] === '') {
        delete body.hackerrank_username
    }
    if (body['codeforces_username'] === '') {
        delete body.codeforces_username
    }
    return http.patch(`srmapstudents/students/${profile.id}/`, body)
}

export function getProfile() {
    const jwt = sessionStorage.getItem("jwt")
    return http.get("srmapstudents/student/me/", {
        method: "get",
        headers: {
            "Authorization":`JWT ${jwt}`
        }
    })
}