interface AccountDTO {

    name: string,
	email: string,
	imageUrl?: string
    
    address: Address,
}

interface Address {
    addressName: string
	addressNumber: string
	neighborhood: string
	postalCode: string
	city: string
	state: string
	complement: string
}

export {AccountDTO, Address}