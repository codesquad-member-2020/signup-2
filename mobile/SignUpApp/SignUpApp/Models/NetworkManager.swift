//
//  NetworkManager.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/26.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import Foundation

class NetworkManager {
    private let usersURLString = "https://shrouded-tor-36901.herokuapp.com/api/users/"
    private let duplicatedCode: Int = 200
    private let notDuplicatedCode: Int = 204
    private let typeOfIdentification = "accountId"
    
    func requestIDDuplicationConfirmation(ID value: String, completion: @escaping (Bool) -> Void) {
        guard let url = URL(string: "\(usersURLString)/signup-check?type=\(typeOfIdentification)&value=\(value)") else { return }
        let request = URLRequest(url: url)
        URLSession.shared.dataTask(with: request) { (data, response, err) in
            if let err = err {
                print(err)
            }
            guard let response = response as? HTTPURLResponse else { return }
            if response.statusCode == self.duplicatedCode {
                completion(false)
            } else if response.statusCode == self.notDuplicatedCode {
                completion(true)
            }
        }.resume()
    }
}
