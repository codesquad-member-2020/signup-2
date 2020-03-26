//
//  IdentificationStatusLabel.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/27.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class IdentificationStatusLabel: SignUpStatusLabel {
    
    enum status: String {
        case formError = "잘못된 아이디 형식입니다."
        case duplicated = "이미 사용중인 아이디입니다."
        case available = "사용 가능한 아이디입니다."
        
        func message() -> String {
            return self.rawValue
        }
    }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        configure()
        
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configure()
    }
    
    func configure() {
        NotificationCenter.default.addObserver(self, selector: #selector(handleStatusChanged), name: SignUpViewModel.IDStatusDidChangeNotification, object: nil)
    }
    
    @objc private func handleStatusChanged(notification: Notification) {
        guard let isValid = notification.userInfo?["isValid"] as? Bool, let status = notification.userInfo?["status"] as? status else { return }
        updateStatus(isValid: isValid, message: status.message())
    }
}
